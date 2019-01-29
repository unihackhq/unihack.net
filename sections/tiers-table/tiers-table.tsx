import './tiers-table.scss';
import React from 'react';

type State = {
  currentPackage: string,
  isTableHeaderFixed: boolean
};

class TiersTable extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentPackage: 'silver',
      isTableHeaderFixed: false
    };
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  private updateMobileTable = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    if (this.state.currentPackage !== target.dataset.package) {
      this.setState({currentPackage: target.dataset.package as string});
    }
  }

  private showTooltip = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    target.classList.toggle('active');
  }

  private scrollListener = () => {
    const selector = document.querySelector('.pkg-mobile-selector');
    const table = document.querySelector('.pkg-table');

    if (selector && table) {
      const rect = table.getBoundingClientRect();

      if (rect && rect.top < -50 && rect.bottom > 50) {
        selector.classList.add('fixed');
      } else {
        selector.classList.remove('fixed');
      }
    }
  }

  public render() {
    return (
      <section className="get-involved">
        <div className="get-involved-content">
          <h3>Get Involved</h3>
          <div className="container pkg-container" data-package={this.state.currentPackage}>
            <div className={`pkg-mobile-selector ${this.state.isTableHeaderFixed ? 'fixed' : ''}`}>
              <div className="pkg-mobile-selector__container">
                <button className="pkg-mobile-selector__button" data-package="com" onClick={this.updateMobileTable}>
                  Bronze
                </button>
                <button className="pkg-mobile-selector__button" data-package="silver" onClick={this.updateMobileTable}>
                  Silver
                </button>
                <button className="pkg-mobile-selector__button" data-package="gold" onClick={this.updateMobileTable}>
                  Gold
                </button>
                <button className="pkg-mobile-selector__button" data-package="plat" onClick={this.updateMobileTable}>
                  Platinum
                </button>
                <button className="pkg-mobile-selector__button" data-package="hyper" onClick={this.updateMobileTable}>
                  Hyper Platinum
                </button>
              </div>
            </div>

            <div className="pkg-table">
              <div className="pkg-table__header">
                <div className="pkg-table__content-cell">
                  Packages
                </div>
                <div className="pkg-table__cell" style={{backgroundColor: '#d28764'}}>
                  <div className="pkg-table__title">
                    Bronze
                  </div>
                  <div className="pkg-table__price">
                    $750
                  </div>
                </div>
                <div className="pkg-table__cell" style={{backgroundColor: '#c8c8c8'}}>
                  <div className="pkg-table__title">
                    Silver
                  </div>
                  <div className="pkg-table__price">
                    $1,500
                  </div>
                </div>
                <div className="pkg-table__cell" style={{backgroundColor: '#ffc300'}}>
                  <div className="pkg-table__title">
                    Gold
                  </div>
                  <div className="pkg-table__price">
                    $3,000
                  </div>
                  <div className="pkg-table__max">
                    Max 10 sponsors
                  </div>
                </div>
                <div className="pkg-table__cell" style={{backgroundColor: '#8c8c8c'}}>
                  <div className="pkg-table__title">
                    Platinum
                  </div>
                  <div className="pkg-table__price">
                    $10,000
                  </div>
                  <div className="pkg-table__max">
                    Max 1 sponsors
                  </div>
                </div>
                <div className="pkg-table__cell" style={{backgroundColor: '#2c383e', color: 'white'}}>
                  <div className="pkg-table__title-sup">
                    hyper
                  </div>
                  <div className="pkg-table__title">
                    Platinum
                  </div>
                  <div className="pkg-table__price">
                    $30,000
                  </div>
                  <div className="pkg-table__max">
                    Max 2 sponsors
                  </div>
                </div>
              </div>
              <div className="pkg-table__row">
                <div className="pkg-table__content-cell">
                  <div className="pkg-table__perk-desc">Company Giveaways</div>
                  <div className="pkg-table__more-info" onClick={this.showTooltip}>
                    <div className="pkg-table__more-info__floating">Swag, tools and APIs.</div>
                  </div>
                </div>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
              </div>
              <div className="pkg-table__row">
                <div className="pkg-table__content-cell">
                  <div className="pkg-table__perk-desc">Mailouts and Announcements</div>
                  <div className="pkg-table__more-info" onClick={this.showTooltip}>
                    <div className="pkg-table__more-info__floating">Get your brand out to our community.</div>
                  </div>
                </div>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
              </div>
              <div className="pkg-table__row">
                <div className="pkg-table__content-cell">
                  <div className="pkg-table__perk-desc">API & Tools Roundup</div>
                  <div className="pkg-table__more-info" onClick={this.showTooltip}>
                    <div className="pkg-table__more-info__floating">
                      Include branding on social media posts, marketing material.
                    </div>
                  </div>
                </div>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
              </div>
              <div className="pkg-table__row">
                <div className="pkg-table__content-cell">
                  <div className="pkg-table__perk-desc">Custom Prizes</div>
                  <div className="pkg-table__more-info" onClick={this.showTooltip}>
                    <div className="pkg-table__more-info__floating">
                      Increase exposure for your brand, product or API through themed custom prizes.
                    </div>
                  </div>
                </div>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
              </div>
              <div className="pkg-table__row">
                <div className="pkg-table__content-cell">
                  <div className="pkg-table__perk-desc">Send Mentors</div>
                  <div className="pkg-table__more-info" onClick={this.showTooltip}>
                    <div className="pkg-table__more-info__floating">
                      Work with students during the hackathon and find your next team hire.
                    </div>
                  </div>
                </div>
                <div className="pkg-table__cell">–</div>
                <div className="pkg-table__cell">1</div>
                <div className="pkg-table__cell">2</div>
                <div className="pkg-table__cell">4</div>
                <div className="pkg-table__cell">6</div>
              </div>
              <div className="pkg-table__row">
                <div className="pkg-table__content-cell">
                  <div className="pkg-table__perk-desc">Send Guests</div>
                  <div className="pkg-table__more-info" onClick={this.showTooltip}>
                    <div className="pkg-table__more-info__floating">
                      Get your recruiters and business managers to check out our talent
                    </div>
                  </div>
                </div>
                <div className="pkg-table__cell">–</div>
                <div className="pkg-table__cell">1</div>
                <div className="pkg-table__cell">2</div>
                <div className="pkg-table__cell">3</div>
                <div className="pkg-table__cell">4</div>
              </div>
              <div className="pkg-table__row">
                <div className="pkg-table__content-cell">
                  <div className="pkg-table__perk-desc">Your Company Logo on all UNIHACK Merchandise</div>
                  <div className="pkg-table__more-info" onClick={this.showTooltip}>
                    <div className="pkg-table__more-info__floating">
                      including participant handbooks, t-shirts and banners.
                    </div>
                  </div>
                </div>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
              </div>
              <div className="pkg-table__row">
                <div className="pkg-table__content-cell">
                  <div className="pkg-table__perk-desc">Run Recruitment Campaigns</div>
                  <div className="pkg-table__more-info" onClick={this.showTooltip}>
                    <div className="pkg-table__more-info__floating">
                      On-the-day recruitment and job opportunity mailouts.
                    </div>
                  </div>
                </div>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
              </div>
              <div className="pkg-table__row">
                <div className="pkg-table__content-cell">
                  <div className="pkg-table__perk-desc">Video Promotions</div>
                  <div className="pkg-table__more-info" onClick={this.showTooltip}>
                    <div className="pkg-table__more-info__floating">
                      Get interviewed to put the spotlight on your company.
                    </div>
                  </div>
                </div>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
              </div>
              <div className="pkg-table__row">
                <div className="pkg-table__content-cell">
                  <div className="pkg-table__perk-desc">Resume and Attendee List</div>
                  <div className="pkg-table__more-info" onClick={this.showTooltip}>
                    <div className="pkg-table__more-info__floating">Receive resumes of competitors who opt-in.</div>
                  </div>
                </div>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
              </div>
              <div className="pkg-table__row">
                <div className="pkg-table__content-cell">
                  <div className="pkg-table__perk-desc">Careers Fair</div>
                  <div className="pkg-table__more-info" onClick={this.showTooltip}>
                    <div className="pkg-table__more-info__floating">Engage with students before the hackathon.</div>
                  </div>
                </div>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
              </div>
              <div className="pkg-table__row">
                <div className="pkg-table__content-cell">
                  <div className="pkg-table__perk-desc">Tool Demo</div>
                  <div className="pkg-table__more-info" onClick={this.showTooltip}>
                    <div className="pkg-table__more-info__floating">
                      Opt to sponsor a tool and demo it for 5 minutes during the Opening Ceremony
                    </div>
                  </div>
                </div>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
              </div>
              <div className="pkg-table__row">
                <div className="pkg-table__content-cell">
                  <div className="pkg-table__perk-desc">Pre-Hackathon Workshops or Webinars</div>
                  <div className="pkg-table__more-info" onClick={this.showTooltip}>
                    <div className="pkg-table__more-info__floating">
                      Work with the UNIHACK team to prepare and ease participants into using your tools on the day.
                    </div>
                  </div>
                </div>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="y"/>
              </div>
              <div className="pkg-table__row">
                <div className="pkg-table__content-cell">
                  <div className="pkg-table__perk-desc">Exclusively Host Info Night</div>
                  <div className="pkg-table__more-info" onClick={this.showTooltip}>
                    <div className="pkg-table__more-info__floating">
                      Host participants on the night they form teams pre-hackathon and flaunt your company culture.
                    </div>
                  </div>
                </div>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="y"/>
                <div className="pkg-table__cell" data-included="n"/>
              </div>
              <div className="pkg-table__row">
                <div className="pkg-table__content-cell">
                  <div className="pkg-table__perk-desc">Opening & Closing Ceremony Keynote Speech</div>
                  <div className="pkg-table__more-info" onClick={this.showTooltip}>
                    <div className="pkg-table__more-info__floating">
                      Kick off the hackathon with a speech by your most esteemed representative.
                    </div>
                  </div>
                </div>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="y"/>
              </div>
              <div className="pkg-table__row">
                <div className="pkg-table__content-cell">
                  <div className="pkg-table__perk-desc">Judge Seat & Main Prize Presentation</div>
                  <div className="pkg-table__more-info" onClick={this.showTooltip}>
                    <div className="pkg-table__more-info__floating">
                      Get to judge all the hacks and present the main prizes.
                    </div>
                  </div>
                </div>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="y"/>
              </div>
              <div className="pkg-table__row">
                <div className="pkg-table__content-cell">
                  <div className="pkg-table__perk-desc">Company Name beside UNIHACK logo</div>
                  <div className="pkg-table__more-info" onClick={this.showTooltip}>
                    <div className="pkg-table__more-info__floating">All promotions will have your company’s name.</div>
                  </div>
                </div>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="n"/>
                <div className="pkg-table__cell" data-included="y"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TiersTable;
