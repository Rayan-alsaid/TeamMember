import React from 'react';
      const Header = ({selectedTeam, teamMemberCount}) => {
        return (
          <header className = "container">
            <div className = "row justify-content-center mt-3 mb-4">
              <div className = "col-8">
                <h1>Team Member Allocation</h1>
                <h3>
                  <span className="text-primary">{selectedTeam}</span> has {teamMemberCount} {teamMemberCount === 1 ? 'member' : 'members'}

                </h3>
              </div>
            </div>
          </header>
        );
      };

      export default Header;
