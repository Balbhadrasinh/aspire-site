import React from 'react'

const TopHeading = ({ title = null, heading, description, router, flag }) => {
    return (
        <div className={router ? 'inline-grid gap-10' : flag ? 'text-center mb-12' : 'text-center mb-24'}>
            {title != null && <p className="top-heading">{title}</p>}
            {router ? <h2 className={'sm:w-5/6 mx-auto'}>{heading}</h2> : <h2 className={title != null ? 'mt-6 sm:w-5/6 mx-auto' : 'sm:w-5/6 mx-auto'}>{heading}</h2>}
            {description ? <p className={router ? 'paragraph lg:w-2/3 mx-auto' : 'paragraph mt-6 lg:w-2/3 mx-auto'}>{description}</p> : null}
        </div>
    )
}

export default TopHeading