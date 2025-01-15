self.__BUILD_MANIFEST = function(s) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, "static/chunks/pages/index-5cd8c8bee92cd7e4.js"],
        "/404": [s, "static/chunks/pages/404-1fe87e0bd6bf8704.js"],
        "/_error": ["static/chunks/pages/_error-39dac43b1ea074c9.js"],
        "/docs": [s, "static/chunks/pages/docs-ce6fff1af0198704.js"],
        sortedPages: ["/", "/404", "/_app", "/_error", "/docs", "/docs/community", "/docs/design", "/docs/develop", "/samples"]
    }
}("static/chunks/299-9c200c3a9969f0d7.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();