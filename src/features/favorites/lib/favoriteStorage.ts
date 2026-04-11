import type { Cat } from "@/entities/cat/model/types.ts";

const KEY = 'favorite-cat-ids';

export const favoriteStorage = {
    get(): Cat[] {
        try {
            const raw = localStorage.getItem(KEY);
            if (!raw) return [];

            const data = JSON.parse(raw);

            if (!Array.isArray(data)) return [];

            return data.filter((item): item is Cat => (
                    typeof item === 'object' &&
                    item !== null &&
                    typeof item.id === 'string' &&
                    typeof item.url === 'string' &&
                    typeof item.width === 'number' &&
                    typeof item.height === 'number'
                )
            );
        } catch {
            return [];
        }
    },
    set(items: Cat[]) {
        try {
            localStorage.setItem(KEY, JSON.stringify(items));
        } catch {}
    }
}