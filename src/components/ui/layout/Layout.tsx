import { FC, PropsWithChildren } from 'react'
import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren<{ title?: string }>> = ({
	children,
	title
}) => {
	return (
		<div className={styles.layout}>
			{title && <h1 className={styles.heading}>{title}</h1>}
			{children}
		</div>
	)
}

export default Layout
