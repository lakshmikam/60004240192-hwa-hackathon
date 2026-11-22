import type { Order } from '../types';

const ORDER_KEY = 'sniffquest.lastOrder.v1';

export function saveOrder(order: Order): void {
  try {
    window.localStorage.setItem(ORDER_KEY, JSON.stringify(order));
  } catch {
    // Storage can be unavailable; the confirmation page will show an empty state.
  }
}

export function readLastOrder(): Order | null {
  try {
    const raw = window.localStorage.getItem(ORDER_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return null;
    const candidate = parsed as Record<string, unknown>;
    if (typeof candidate.id !== 'string' || typeof candidate.total !== 'number') return null;
    if (!Array.isArray(candidate.items)) return null;
    return parsed as Order;
  } catch {
    return null;
  }
}
