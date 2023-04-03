This folder should includes features or modules that represent distinct areas of functionality in your app.
Each feature should be a self-contained module that can be developed, tested independently.


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
    /types
        example.type.ts (Entity/Model/NetworkResponse/storeState type)
        index.ts
    /services
        example.service.ts
        index.ts
    /screens
        example.screen.ts (Should use containers, and global components with no styling and children props)
        index.ts
    /store
        example.selector.ts
        example.slice.ts
        example.state.ts
        example.slice.ts
        index.ts (Group all stores, in one store)
    /utils
    index.ts (Export the module)

    