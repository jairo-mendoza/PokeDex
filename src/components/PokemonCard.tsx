import { useCallback, useState } from 'react'
import type { CSSProperties } from 'react'
import type { PokedexEntry } from '../data/schema'
import { TYPE_COLORS, art } from '../data/meta'
import './PokemonCard.css'

const pad = (id: number) => String(id).padStart(4, '0')

type ImgState = 'loading' | 'loaded' | 'failed'

interface PokemonCardProps {
	entry: PokedexEntry
	onOpen?: (id: number) => void
}

export default function PokemonCard({ entry, onOpen }: PokemonCardProps) {
	const [img, setImg] = useState<ImgState>('loading')

	// Cached images can fire load before React attaches onLoad, so recheck
	// complete when the element mounts to avoid a stuck skeleton.
	const imgRef = useCallback((el: HTMLImageElement | null) => {
		if (el && el.complete && el.naturalWidth > 0) setImg('loaded')
	}, [])

	const label = `${entry.name}, number ${entry.id}, ${entry.types.join(' and ')} type`

	return (
		<button
			className="card"
			role="listitem"
			aria-haspopup="dialog"
			aria-label={label}
			onClick={onOpen ? () => onOpen(entry.id) : undefined}
		>
			<div className="card__head">
				<span className="card__num">#{pad(entry.id)}</span>
				{entry.legendary && (
					<span className="card__badge card__badge--legendary">
						LEGENDARY
					</span>
				)}
				{entry.mythical && (
					<span className="card__badge card__badge--foil">MYTHICAL</span>
				)}
			</div>
			<div className="card__imgbox">
				<div
					className="card__skel"
					aria-hidden="true"
					data-hidden={img === 'loaded'}
					data-failed={img === 'failed'}
				/>
				<img
					ref={imgRef}
					className="card__img"
					src={art(entry.id)}
					alt=""
					loading="lazy"
					draggable={false}
					data-loaded={img === 'loaded'}
					onLoad={() => setImg('loaded')}
					onError={() => setImg('failed')}
				/>
			</div>
			<span className="card__name">{entry.name}</span>
			<div className="card__types">
				{entry.types.map((t) => (
					<span
						key={t}
						className="card__type"
						style={{ '--type-color': TYPE_COLORS[t] } as CSSProperties}
					>
						{t}
					</span>
				))}
			</div>
		</button>
	)
}
