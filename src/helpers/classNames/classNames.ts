
type Mods = Record<string, boolean | string>
export function classNames (mainClass: string, mods: Mods, additional: string[]) {

    return [
        mainClass,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, isActive])=> Boolean(isActive))
            .map(([className])=> className)

    ].join(" ")

}