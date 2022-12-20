
const Footer = () => {
    return (
        <footer className='hero-foot center' style={{ padding: '2rem' }}>
            <div className='Grid' style={{ width: '768px' }}>
                <div className='a center-column'>
                    <p class="has-text-centered has-text-black">
                        The quickest car in the world, with record-setting<br />
                        acceleration, range and performance.
                    </p>
                </div>
                <div className='b center-column'>
                    <p class="title has-text-black">1.9<span class="is-size-5">s</span></p>
                    <p class="subtitle has-text-white is-7">0-60 mph</p>
                </div>
                <div className='c center-column'>
                    <p class="title has-text-black"><span class="is-size-5">+</span>250<span class="is-size-5">mph</span></p>
                    <p class="subtitle is-7 has-text-white">Top Speed</p>
                </div>
                <div className='d center-column'>
                    <p class="title has-text-black">620<span class="is-size-5">mi</span></p>
                    <p class="subtitle is-7 has-text-white">Mile Range</p>
                </div>
                <div className='e center-column'>

                </div>
            </div>
        </footer>
    )
}

export default Footer