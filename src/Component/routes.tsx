// src/routes.tsx

import React, {Fragment} from 'react'
import {Route, Routes} from 'react-router-dom'

const PRESERVED = import.meta.glob('/src/Pages/(_app|404).tsx', {eager: true})
const ROUTES = import.meta.glob('/src/Pages/**/[a-z[]*.tsx', {eager: true})

const preserved = Object.keys(PRESERVED).reduce((preserved, file) => {
	const key = file.replace(/\/src\/Pages\/|\.tsx$/g, '')
	// @ts-ignore
	return {...preserved, [key]: PRESERVED[file].default}
}, {})

console.log(preserved)

const routes = Object.keys(ROUTES).map((route) => {
	const path = route
		.replace(/\/src\/Pages|index|\.tsx$/g, '')
		.replace(/\[\.{3}.+\]/, '*')
		.replace(/\[(.+)\]/, ':$1')

	// @ts-ignore
	return {path, component: ROUTES[route].default}
})

export const CustomRoutes = () => {
	// @ts-ignore
	const App = preserved?.['_app'] || Fragment
	// @ts-ignore
	const NotFound = preserved?.['404'] || Fragment

	return (
		<App>
			<Routes>
				{routes.map(({path, component: Component = Fragment}) => (
					<Route key={path} path={path} Component={Component}/>
				))}
				<Route path="*" Component={NotFound}/>
			</Routes>
		</App>
	)
}
