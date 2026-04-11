import type {Cat} from "@/entities/cat/model/types";
import {CAT_API_KEY} from "@/shared/config/env.ts";

type GetCatsParams = {
    limit?: number;
}
export async function getCats({limit=15}: GetCatsParams): Promise<Cat[]> {
    if (!CAT_API_KEY) {
        throw new Error(`CAT_API_KEY is not defined`);
    }

    const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}`,
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