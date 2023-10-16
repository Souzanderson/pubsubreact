export const Subscriber = (() => {
    //Constante com todos os tópicos
    const topics: any = {}

    //Função que publica um valor em um tópico
    const publish = (topic: string, value: any) => {
        if (!(topic in topics)) return

        topics[topic].forEach((element: (arg: any) => void) => {
            element(value)
        });
    }

    //Função que permite se inscrever em um tópico e executar uma função callback
    const subscribe = (topic: string, callback: (arg: any) => void) => {
        if (!(topic in topics)) topics[topic] = []

        const index = topics[topic].push(callback) - 1
        return {
            unsubscribe: () => {
                delete topics[topic][index]
            }
        }
    }

    return { publish, subscribe }
})()

