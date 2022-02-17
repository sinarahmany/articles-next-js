import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}><span>Webdev</span> News</h1>
{/*            <style jsx>*/}
{/*                {`*/}
{/*                  .title {*/}
{/*                  color: ${ x > 3 ? 'red' : 'blue'};*/}
{/*                  }                */}
{/*`}*/}
{/*            </style>*/}
            <p className={headerStyles.description}>Keep up to date with web deb news</p>
        </div>
    );
};

export default Header;