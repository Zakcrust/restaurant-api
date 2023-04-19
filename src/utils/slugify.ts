export const slugify = (item_name: string) => {
    var result = item_name.match(/(^.|[^.aiueoAIUEO\s]+|.$)/g);
    return `${result.join("").toUpperCase()}`
}