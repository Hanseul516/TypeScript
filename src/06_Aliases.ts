// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)

type Pianist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber