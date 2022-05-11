import { PropsWithChildren } from "react"

interface TitleOptions {
	title: string,
}

interface PageTitleOptions {
	pageTitle: string,
}

export type OnPageTitleChange =
	({ pageTitle }: PageTitleOptions) => void

export interface ParseTitleFunctionOptions
	extends TitleOptions, PageTitleOptions {}

export type ParseTitleFunction =
	(parseOptions: ParseTitleFunctionOptions) => string

export interface Configuration
	extends TitleOptions {
	description: string,
	parseTitle: ParseTitleFunction,
	onPageTitleChange: OnPageTitleChange,
}

interface ConfigurationOptions {
	configuration: Configuration,
}

export interface SetOptions
	extends
	PageTitleOptions,
	ConfigurationOptions {}

export type ProviderPropTypes =
	PropsWithChildren<ConfigurationOptions>

export type PropTypes =
	PropsWithChildren<PageTitleOptions>