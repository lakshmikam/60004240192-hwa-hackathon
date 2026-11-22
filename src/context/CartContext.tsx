import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { getKit } from '../data/kits';
import type { CartLine } from '../types';

const STORAGE_KEY = 'sniffquest.cart.v1';

type StoredLine = {
  kitId: string;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  totalQty: number;
  subtotal: number;
  add: (kitId: string, qty?: number) => void;
  setQty: (kitId: string, qty: number) => void;
  remove: (kitId: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function clampQty(qty: number): number {
  return Math.max(1, Math.min(9, Math.floor(qty)));
}

function readCart(): StoredLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((entry): entry is StoredLine => {
        if (typeof entry !== 'object' || entry === null) return false;
        const candidate = entry as Record<string, unknown>;
        return (
          typeof candidate.kitId === 'string' &&
          typeof candidate.qty === 'number' &&
          Number.isFinite(candidate.qty)
        );
      })
      .filter((entry) => Boolean(getKit(entry.kitId)))
      .map((entry) => ({ kitId: entry.kitId, qty: clampQty(entry.qty) }));
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [stored, setStored] = useState<StoredLine[]>(readCart);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    } catch {
      // Ignore storage errors — the cart still works in memory.
    }
  }, [stored]);

  const lines = useMemo<CartLine[]>(() => {
    return stored.flatMap((entry) => {
      const kit = getKit(entry.kitId);
      return kit ? [{ kit, qty: entry.qty }] : [];
    });
  }, [stored]);

  const value = useMemo<CartContextValue>(() => {
    const totalQty = lines.reduce((sum, line) => sum + line.qty, 0);
    const subtotal = lines.reduce((sum, line) => sum + line.kit.price * line.qty, 0);

    const add = (kitId: string, qty = 1) => {
      if (!getKit(kitId)) return;
      setStored((current) => {
        const existing = current.find((line) => line.kitId === kitId);
        if (existing) {
          return current.map((line) =>
            line.kitId === kitId
              ? { ...line, qty: Math.min(9, line.qty + Math.max(1, qty)) }
              : line,
          );
        }
        return [...current, { kitId, qty: clampQty(qty) }];
      });
    };

    const setQty = (kitId: string, qty: number) => {
      setStored((current) =>
        current.map((line) =>
          line.kitId === kitId ? { ...line, qty: clampQty(qty) } : line,
        ),
      );
    };

    const remove = (kitId: string) => {
      setStored((current) => current.filter((line) => line.kitId !== kitId));
    };

    const clear = () => {
      setStored([]);
    };

    return { lines, totalQty, subtotal, add, setQty, remove, clear };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside a CartProvider');
  return context;
}
