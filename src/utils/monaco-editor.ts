import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

// Provide Monaco workers
self.MonacoEnvironment = {
    getWorker: function (moduleId, label) {
        if (label === "json") {
            return new Worker(
                /* webpackChunkName: "monaco-json-worker" */ new URL("monaco-editor/esm/vs/language/json/json.worker.js", import.meta.url)
            );
        }
        return new Worker(
            /* webpackChunkName: "monaco-worker" */ new URL("monaco-editor/esm/vs/editor/editor.worker.js", import.meta.url)
        )
    }
}
