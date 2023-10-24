import React from 'react';
import styles from './index.module.less';

const list = ['Dropdown 下拉面板', 'Flex 布局', 'Tab 滑动门', 'Dialog 对话框', '一封给未来自己的信'];
export const Telephone = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	const items = React.useRef(new Array());
	const activeDiv = React.useRef<HTMLDivElement | null>(null);

	return (
		<>
			<div className={styles.catalog}>
				{list.map((item, index) => {
					return (
						<div
							id={index.toString()}
							key={index}
							className={
								activeIndex == index
									? `${styles.catalog_item} ${styles.active}`
									: `${styles.catalog_item}`
							}
							ref={element => (items.current[index] = element)}
							onMouseOver={e => {
								const currentIndex = e.currentTarget.id;
								setActiveIndex(Number(currentIndex));
								console.log(`currentIndex: `, Number(currentIndex));
								if (activeDiv.current) {
									activeDiv.current.style.top = `${index * 40 + 10}px`;
								}
							}}
						>
							{item}
						</div>
					);
				})}
				<div className={styles.catalog_active} ref={activeDiv}></div>
			</div>
		</>
	);
};
