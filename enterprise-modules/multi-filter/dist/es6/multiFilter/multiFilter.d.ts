import { AgPromise, ProvidedFilterModel, IDoesFilterPassParams, IAfterGuiAttachedParams, IFilterComp, IFilterDef, IFilterParams, ManagedFocusComponent } from '@ag-grid-community/core';
export interface IMultiFilterDef extends IFilterDef {
    display?: 'inline' | 'accordion' | 'subMenu';
    title?: string;
}
export interface IMultiFilterParams extends IFilterParams {
    filters?: IMultiFilterDef[];
}
export interface IMultiFilterModel {
    filterType: string;
    filterModels: any[];
}
export declare class MultiFilter extends ManagedFocusComponent implements IFilterComp {
    private readonly filterManager;
    private readonly userComponentFactory;
    private params;
    private filterDefs;
    private filters;
    private guiDestroyFuncs;
    private column;
    private filterChangedCallback;
    private lastOpenedInContainer?;
    private activeFilterIndices;
    private lastActivatedMenuItem;
    constructor();
    static getFilterDefs(params: IMultiFilterParams): IMultiFilterDef[];
    init(params: IMultiFilterParams): AgPromise<void>;
    private refreshGui;
    private getFilterTitle;
    private destroyChildren;
    private insertFilterMenu;
    private insertFilterGroup;
    isFilterActive(): boolean;
    getLastActiveFilterIndex(): number | null;
    doesFilterPass(params: IDoesFilterPassParams, filterToSkip?: IFilterComp): boolean;
    private getFilterType;
    getModelFromUi(): IMultiFilterModel | null;
    getModel(): ProvidedFilterModel | null;
    setModel(model: IMultiFilterModel | null): AgPromise<void>;
    getChildFilterInstance(index: number): IFilterComp;
    afterGuiAttached(params?: IAfterGuiAttachedParams): void;
    onAnyFilterChanged(): void;
    onNewRowsLoaded(): void;
    destroy(): void;
    private executeFunctionIfExists;
    private createFilter;
    private filterChanged;
    protected onFocusIn(e: FocusEvent): void;
}
