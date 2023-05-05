This folder should includes features or modules that represent distinct areas of functionality in your app.
Each feature should be a self-contained module that can be developed, tested independently.
- Notes: 
For global state management and the navigation should done in the root folder not in module folder. 
(The store will represent the relationship between the modules)
To summarize, any functionality that (could/may will) be used in multiple modules should not be here.

Example:

/example-module
    /components
        /example
            example.component.tsx (Could use global components, should use only props)
            example.style.ts (Should be dynamic to the app theme && component props)
            index.ts
        index.ts
    /containers
        /example
            example.container.tsx (Should use local/global components, should use store state)
            example.style.ts (Should be dynamic to the app theme)
            index.ts
        index.ts
    /hooks
        example.hook.ts
        index.ts
    /services
        example.service.ts
        index.ts
    /screens
        example.screen.ts (Should use containers, and global components with no styling and children props)
        index.ts
    /utils
    index.ts (Export the module)

    