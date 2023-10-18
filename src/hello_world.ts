const greeting = 'world';

export function hello(world: string = greeting): string {
    if (world == "Bob") {
        return "Hiya Bob!";
    } else if (world == "Dog") {
        return "Hiya Dog!";
    } else if (world == "God") {
        return "Hiya God!";
    } else if (world == "Charlie") {
        return "Hiya Charlie!";
    }
    return `Hello ${world}!`;
}
