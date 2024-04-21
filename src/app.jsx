
import styles from './styles.module.scss';

const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

/**
 * @param {number} min 
 * @param {number} max 
 */
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

/**
 * @param {unknown[]} arr 
 */
const shuffle = (arr) => [...arr].sort(() => .5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
	return (
		<div class={styles['loop-slider']} style={{
			'--duration': `${duration}ms`,
			'--direction': reverse ? 'reverse' : 'normal'
		}}>
			<div class={styles['inner']}>
				{children}
				{children}
			</div>
		</div>
	);
};

const Tag = ({ text }) => (
	<div class={styles['tag']}><span>#</span> {text}</div>
);

/**
 * @credit https://codepen.io/ykadosh/pen/KKezJzz
 */
export const App = () => (
	<div class={styles['app']}>
		<header>
			<h1>Infinite Scroll Animation</h1>
			<p>CSS only, content independent, bi-directional, customizable</p>
		</header>
		<div class={styles['tag-list']}>
			{[...new Array(ROWS)].map((_, i) => (
				<InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
					{shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
						<Tag text={tag} key={tag} />
					))}
				</InfiniteLoopSlider>
			))}
			<div class={styles['fade']} />
		</div>
	</div>
);