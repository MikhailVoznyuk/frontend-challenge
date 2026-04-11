import type {Cat} from "@/entities/cat/model/types";
import {CAT_API_KEY} from "@/shared/config/env.ts";

const API_URL = 'https://api.thecatapi.com/v1/images/search';

export async function getCats(limit:number=15): Promise<Cat[]> {
    if (!CAT_API_KEY) {
        throw new Error(`CAT_API_KEY is not defined`);
    }

    const res = await fetch(
        `${API_URL}?limit=${limit}`,
        {
            headers: {
                'x-api-key': CAT_API_KEY
            }
        }
    )

    if (!res.ok) {
        throw new Error(`Cats API Error. Received HTTP code: ${res.status}`);
    }

    return res.json();
}