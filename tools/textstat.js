const path = require("path");
const cli = require("textstat").cli;
const sourceDir = path.join(__dirname, "../source");
cli.run({
    globPatterns: [
        path.join(sourceDir, "index.md"),
        path.join(sourceDir, "intro/goal/README.md"),
        path.join(sourceDir, "intro/feedback/README.md"),
        path.join(sourceDir, "basic/README.md"),
        path.join(sourceDir, "basic/introduction/README.md"),
        path.join(sourceDir, "basic/comments/README.md"),
        path.join(sourceDir, "basic/variables/README.md"),
        path.join(sourceDir, "basic/read-eval-print/README.md"),
        path.join(sourceDir, "basic/data-type/README.md"),
        path.join(sourceDir, "basic/operator/README.md"),
        path.join(sourceDir, "basic/implicit-coercion/README.md"),
        path.join(sourceDir, "basic/function-declaration/README.md"),
        path.join(sourceDir, "basic/statement-expression/README.md"),
        path.join(sourceDir, "basic/condition/README.md"),
        path.join(sourceDir, "basic/loop/README.md"),
        path.join(sourceDir, "basic/object/README.md"),
        path.join(sourceDir, "basic/array/README.md"),
        path.join(sourceDir, "basic/string/README.md"),
        path.join(sourceDir, "basic/math/README.md"),
        path.join(sourceDir, "basic/wrapper-object/README.md"),
        path.join(sourceDir, "basic/function-scope/README.md"),
        path.join(sourceDir, "basic/function-this/README.md"),
        path.join(sourceDir, "basic/class/README.md"),
        path.join(sourceDir, "basic/error-try-catch/README.md"),
        path.join(sourceDir, "basic/async/README.md"),
        path.join(sourceDir, "basic/json/README.md"),
        path.join(sourceDir, "basic/date/README.md"),
        path.join(sourceDir, "basic/map-and-set/README.md"),
        path.join(sourceDir, "basic/bad-parts/README.md"),
        path.join(sourceDir, "basic/ecmascript/README.md"),
        path.join(sourceDir, "basic/other-parts/README.md"),
        path.join(sourceDir, "use-case/README.md"),
        path.join(sourceDir, "use-case/setup-local-env/README.md"),
        path.join(sourceDir, "use-case/module/README.md"),
        path.join(sourceDir, "use-case/ajaxapp/README.md"),
        path.join(sourceDir, "use-case/ajaxapp/entrypoint/README.md"),
        path.join(sourceDir, "use-case/ajaxapp/xhr/README.md"),
        path.join(sourceDir, "use-case/ajaxapp/display/README.md"),
        path.join(sourceDir, "use-case/ajaxapp/promise/README.md"),
        path.join(sourceDir, "use-case/nodecli/README.md"),
        path.join(sourceDir, "use-case/nodecli/helloworld/README.md"),
        path.join(sourceDir, "use-case/nodecli/argument-parse/README.md"),
        path.join(sourceDir, "use-case/nodecli/read-file/README.md"),
        path.join(sourceDir, "use-case/nodecli/md-to-html/README.md"),
        path.join(sourceDir, "use-case/nodecli/refactor-and-unittest/README.md"),
        path.join(sourceDir, "use-case/todoapp/README.md"),
        path.join(sourceDir, "use-case/todoapp/entrypoint/README.md"),
        path.join(sourceDir, "use-case/todoapp/app-structure/README.md"),
        path.join(sourceDir, "use-case/todoapp/form-event/README.md"),
        path.join(sourceDir, "use-case/todoapp/event-model/README.md"),
        path.join(sourceDir, "use-case/todoapp/update-delete/README.md"),
        path.join(sourceDir, "use-case/todoapp/final/README.md"),
    ],
    format: "json",
    locale: "en"
}).then(output => {
    console.log(output);
}).catch(error => {
    console.error(error);
    process.exit(1);
});
