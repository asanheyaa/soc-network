import s from './FormsControls.module.css'


export function Textarea({ input, meta, ...props }) {
	const hasError = meta.error && meta.touched
	return (
		<div className={s.formPost + ' ' + (hasError ? s.error : '')}>
			<textarea className={s.textarea}  {...input} {...props} />
			{hasError && <div className={s.errorMessage}>pls do something</div>}
			
		</div>
	)
}


export function Input({ input, meta, ...props }) {
	const hasError = meta.error && meta.touched
	return (
		<div className={s.formPost + ' ' + (hasError ? s.error : '')}>
			<input className={s.textarea} {...input} {...props} />
			{hasError && <div className={s.errorMessage}>pls do something</div>}

		</div>
	)
}

