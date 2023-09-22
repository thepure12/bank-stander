export const state = () => ({
    fileHandle: null,
    properties: {}
})

export const mutations = {
    setFileHandle(state, fileHandle) {
        state.fileHandle = fileHandle
    },
    setProperties(state, properties) {
        state.properties = properties
    }
}