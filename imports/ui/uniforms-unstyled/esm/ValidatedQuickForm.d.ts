/// <reference types="react" />
declare const _default: {
    new <Model, Props extends import("uniforms").ValidatedFormProps<Model> = import("uniforms").ValidatedFormProps<Model>, State extends import("uniforms").ValidatedFormState<Model> = import("uniforms").ValidatedFormState<Model>>(props: Props): {
        validate: (key?: string | undefined, value?: any) => Promise<any>;
        validateModel: (originalModel: any) => Promise<any>;
        getContextError(): any;
        getContext(): import("uniforms").Context<Model>;
        getNativeFormProps(): {
            [key: string]: unknown;
            onSubmit: (event?: import("react").SyntheticEvent<Element, Event> | undefined) => Promise<any>;
            key: string;
        };
        componentDidUpdate(prevProps: Props, prevState: State, snapshot: never): void;
        onChange(key: string, value: any): void;
        __reset(state: State): Partial<State>;
        onSubmit(event?: import("react").SyntheticEvent<Element, Event> | undefined): Promise<any>;
        onValidate(key?: string | undefined, value?: any): Promise<any>;
        onValidateModel(originalModel: Props["model"]): Promise<any>;
        componentDidMount(): void;
        componentWillUnmount(): void;
        delayId?: any;
        mounted: boolean;
        reset: () => void;
        change: (key: string, value: any) => void;
        submit: (event?: import("react").SyntheticEvent<Element, Event> | undefined) => Promise<any>;
        randomId: () => string;
        getContextName(): string[];
        getContextModel(): import("uniforms").DeepPartial<Model>;
        getContextState(): {
            disabled: boolean;
            label: boolean;
            placeholder: boolean;
            readOnly: boolean;
            showInlineError: boolean;
        };
        getContextSchema(): import("uniforms").Bridge;
        getContextOnChange(): (key: string, value: any) => void;
        getContextOnSubmit(): (event?: import("react").SyntheticEvent<Element, Event> | undefined) => any;
        getModel(mode?: import("uniforms").ModelTransformMode | undefined, model?: import("uniforms").DeepPartial<Model> | undefined): import("uniforms").DeepPartial<Model>;
        onReset(): void;
        render(): JSX.Element;
        context: any;
        setState<K extends keyof State>(state: State | Pick<State, K> | ((prevState: Readonly<State>, props: Readonly<Props>) => State | Pick<State, K> | null) | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<State>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<State>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void;
    };
    Validated: typeof import("uniforms").Validated;
    displayName: string;
    defaultProps: {
        onValidate(model: unknown, error: any): any;
        validate: string;
        autosave: boolean;
        autosaveDelay: number;
        error: null;
        label: boolean;
        model: any;
        noValidate: boolean;
        onSubmit(): void;
    };
    contextType?: import("react").Context<any> | undefined;
} & {
    new <Model_1, Props_1 extends import("uniforms").QuickFormProps<Model_1> = import("uniforms").QuickFormProps<Model_1>, State_1 extends import("uniforms").QuickFormState<Model_1> = import("uniforms").QuickFormState<Model_1>>(props: Props_1): {
        getNativeFormProps(): {
            [key: string]: unknown;
            onSubmit: (event?: import("react").SyntheticEvent<Element, Event> | undefined) => Promise<any>;
            key: string;
        };
        getAutoField(): import("react").ComponentType<{
            name: string;
        }>;
        getErrorsField(): import("react").ComponentType<{}>;
        getSubmitField(): import("react").ComponentType<{}>;
        componentDidMount(): void;
        componentDidUpdate(prevProps: Props_1, prevState: State_1, snapshot: never): void;
        componentWillUnmount(): void;
        delayId?: any;
        mounted: boolean;
        reset: () => void;
        change: (key: string, value: any) => void;
        submit: (event?: import("react").SyntheticEvent<Element, Event> | undefined) => Promise<any>;
        randomId: () => string;
        getContext(): import("uniforms").Context<Model_1>;
        getContextName(): string[];
        getContextError(): any;
        getContextModel(): import("uniforms").DeepPartial<Model_1>;
        getContextState(): {
            disabled: boolean;
            label: boolean;
            placeholder: boolean;
            readOnly: boolean;
            showInlineError: boolean;
        };
        getContextSchema(): import("uniforms").Bridge;
        getContextOnChange(): (key: string, value: any) => void;
        getContextOnSubmit(): (event?: import("react").SyntheticEvent<Element, Event> | undefined) => any;
        getModel(mode?: import("uniforms").ModelTransformMode | undefined, model?: import("uniforms").DeepPartial<Model_1> | undefined): import("uniforms").DeepPartial<Model_1>;
        onChange(key: string, value: any): void;
        __reset(state: State_1): Partial<State_1>;
        onReset(): void;
        onSubmit(event?: import("react").SyntheticEvent<Element, Event> | undefined): Promise<any>;
        render(): JSX.Element;
        context: any;
        setState<K_1 extends keyof State_1>(state: State_1 | Pick<State_1, K_1> | ((prevState: Readonly<State_1>, props: Readonly<Props_1>) => State_1 | Pick<State_1, K_1> | null) | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Props_1> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<State_1>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Props_1>, nextState: Readonly<State_1>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props_1>, prevState: Readonly<State_1>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props_1>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props_1>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props_1>, nextState: Readonly<State_1>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props_1>, nextState: Readonly<State_1>, nextContext: any): void;
    };
    Quick: typeof import("uniforms").Quick;
    displayName: string;
    defaultProps: {
        autosave: boolean;
        autosaveDelay: number;
        error: null;
        label: boolean;
        model: any;
        noValidate: boolean;
        onSubmit(): void;
    };
    contextType?: import("react").Context<any> | undefined;
} & typeof import("uniforms").BaseForm;
export default _default;
