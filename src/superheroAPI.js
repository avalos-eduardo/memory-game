import { apiKey } from "./api-key"

export const getHeroes = async () => {
    try {
        const response = await fetch(`https://superheroapi.com/api/${apiKey}`);
        const data = await response.json();
        return data.map(hero => ({
            id: hero.id,
            name: hero.name,
            image: hero.image.url,
        }));
    }
    catch (error) {
        console.error("Error fetching herroes:", error);
    }
}