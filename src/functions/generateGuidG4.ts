export default function generateGuidG4(id?: string) {
    if (id === undefined || id === null)
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
    else
        return id
}