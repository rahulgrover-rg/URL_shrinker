import * as React from 'react';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="bg-slate-900">
        <div className="container p-2 mx-auto">
            <nav className="navbar py-5">
                <div className="text-white text-base">URLShrinker</div>
            </nav>
        </div>
    </div>
  ) ;
};

export default Header;
