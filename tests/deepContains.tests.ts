import { deepContains } from "../src/deepContains"

describe("", () => {

    type Node = {
        name: string
        nodes?: Node[]
    }
    const node: Node = {
        name: "1",
        nodes: [
            {
                name: "10",
                nodes: [
                    { name: "100" },
                    { name: "200" }
                ]
            },
            {
                name: "20",
                nodes: [
                    { name: "300" },
                    { name: "400" }
                ]
            }
        ]
    }
    const getChildNodes = (node: Node) => node.nodes

    
    test("deepSearch for the node itself should return true", () => {
        const predicate = (node: Node) => node.name === "1"

        const res = deepContains(node, predicate, getChildNodes)

        expect(res).toBe(true)
    })


    test("deepSearch for node found on nested level should return true", () => {
        const predicate = (node: Node) => node.name === "300"

        const res = deepContains(node, predicate, getChildNodes)

        expect(res).toBe(true)
    })

    test("deepSearch for non-existant node should return false", () => {
        const predicate = (node: Node) => node.name === "999"

        const res = deepContains(node, predicate, getChildNodes)

        expect(res).toBe(false)
    })

})
