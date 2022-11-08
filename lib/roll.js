// roll dice

export function roll(sides, dice, rolls){
    let i = 0
    const results = []
    while (i < rolls){
        results.push(Math.ceil(Math.random()*6));
        i++;
    }
    return results;
}