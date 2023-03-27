export default function AnimatedLoadingText(props: { button?: boolean }) {
    return (
        <div className={props.button ? 'loading-container w-full h-[40px] md:h-full !mx-0 flex justify-start items-center' : 'loading-container'}>
            {props.button ? 
                <div className="ml-4 text-sm">Loading...</div>
                :
                <div className='loading-text'>
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                </div>

            }
            
        </div>
    );
}
