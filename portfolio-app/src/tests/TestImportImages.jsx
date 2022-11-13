const modules = import.meta.glob('../media/images/*.jpg');

const links = [];
for (const path in modules) {

    modules[path]().then((mod) => {
        links.push(mod.default);
    })
}

function Appa(){

    return(
        <div>
            {links.map(e => <><img key={e} src={e} alt='asd' style={{opacity: .5}} /></>)}
        </div>
    );
}

export default Appa;