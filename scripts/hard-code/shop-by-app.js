/* eslint-disable func-names */
function jsx(html, ...args) {
  return html.slice(1).reduce((str, elem, i) => str + args[i] + elem, html[0]);
}

/* Start of Shop By Application Area */
const container = document.querySelector(
  '.section.test-and-measurement.columns-container',
);

if (container) {
  const newDiv = jsx`<hr /> <div class="default-content-wrapper"><h2 id="shop-by-application-area">Shop by Application Area</h2></div><div class="ts-tabs-container">
        <div class="ts-tabs-header">
            <div class="ts-tab active" data-tab="data-acquisition">Data Acquisition and Control</div>
            <div class="ts-tab" data-tab="electronic-test">Electronic Test and Communication</div>
            <div class="ts-tab" data-tab="wireless-test">Wireless Design and Test</div>
            <div class="ts-tab" data-tab="systems-management">Systems and Data Management</div>
            <div class="ts-tab" data-tab="education">Engineering Education</div>
        </div>
        <div class="ts-tab-content active" data-tab="data-acquisition">
            <div class="ts-columns-container">
                <div class="ts-column">
                    <ul class="ts-item-list arrow-list">
                        <li class="ts-list-item">Multifunction I/O</li>
                        <li class="ts-list-item">Voltage</li>
                        <li class="ts-list-item">Current</li>
                        <li class="ts-list-item">Digital I/O</li>
                        <li class="ts-list-item">Counters and Timers</li>
                        <li class="ts-list-item">Packaged Controllers</li>
                        <li class="ts-list-item">Industrial Communication Buses</li>
                        <li class="ts-list-item">Vehicle Communication Buses</li>
                        <li class="ts-list-item">Avionics Communication Buses</li>
                        <li class="ts-list-item">Temperature</li>
                        <li class="ts-list-item">Sound and Vibration</li>
                        <li class="ts-list-item">Strain, Pressure, and Force</li>
                    </ul>
                </div>
                <div class="ts-column">
                    <ul class="ts-item-list arrow-list">
                        <li class="ts-list-item">Position Displacement</li>
                        <li class="ts-list-item">Machine Vision</li>
                        <li class="ts-list-item">Board-Level Controllers</li>
                        <li class="ts-list-item">HMIs and Displays</li>
                        <li class="ts-list-item">Signal Conditioning</li>
                        <li class="ts-list-item">Programming Environments for Data Acquisition and Control</li>
                        <li class="ts-list-item">Control & Software Suites for Data Acquisition and Control</li>
                        <li class="ts-list-item">Application Software for Data Acquisition and Control</li>
                    </ul>
                </div>
                <div class="ts-column">
                    <ul class="ts-item-list arrow-list">
                        <li class="ts-list-item">Add-Ons for Data Acquisition and Control</li>
                        <li class="ts-list-item">SystemLink™ Software</li>
                    </ul>
                </div>
            </div>
            <div>
            <button class="ts-see-more">See more</button>
            </div>
        </div>

        <div class="ts-tab-content" data-tab="electronic-test">
            <div class="ts-columns-container">
                <div class="ts-column">
                    <ul class="ts-item-list arrow-list">
                        <li class="ts-list-item">Oscilloscopes</li>
                        <li class="ts-list-item">Digital Instruments</li>
                        <li class="ts-list-item">Frequency Counters</li>
                        <li class="ts-list-item">Power Supplies and Loads</li>
                        <li class="ts-list-item">Switches</li>
                        <li class="ts-list-item">GPIB, Serial, and Ethernet</li>
                        <li class="ts-list-item">Digital Multimeters</li>
                        <li class="ts-list-item">Waveform Generators</li>
                    </ul>
                </div>
                <div class="ts-column">
                    <ul class="ts-item-list arrow-list">
                        <li class="ts-list-item">Source Measure Units and LCR Meters</li>
                        <li class="ts-list-item">FlexRIO Custom Instruments and Processing</li>
                        <li class="ts-list-item">Programming Environments for Electronic Test and Instrumentation</li>
                        <li class="ts-list-item">Software Suites for Electronic Test and Instrumentation</li>
                        <li class="ts-list-item">Application Software for Electronic Test and Instrumentation</li>
                        <li class="ts-list-item">Add-Ons for Electronic Test and Instrumentation</li>
                        <li class="ts-list-item">Semiconductor Test System</li>
                        <li class="ts-list-item">SystemLink™ Software</li>
                    </ul>
                </div>
            </div>
            <button class="ts-see-more">See more</button>
        </div>

        <div class="ts-tab-content" data-tab="wireless-test">
            <div class="ts-columns-container">
                <div class="ts-column">
                    <ul class="ts-item-list arrow-list">
                        <li class="ts-list-item">Vector Signal Transceivers</li>
                        <li class="ts-list-item">RF Signal Generators</li>
                        <li class="ts-list-item">Software Defined Radios</li>
                        <li class="ts-list-item">Network Analyzers</li>
                        <li class="ts-list-item">Spectrum and Signal Analyzers</li>
                        <li class="ts-list-item">RF and Microwave Switches</li>
                        <li class="ts-list-item">Power Sensors</li>
                        <li class="ts-list-item">RF Signal Conditioning</li>
                    </ul>
                </div>
                <div class="ts-column">
                    <ul class="ts-item-list arrow-list">
                        <li class="ts-list-item">Programming Environments for Wireless Design and Test</li>
                        <li class="ts-list-item">Test & Software Suites for Wireless Design and Test</li>
                        <li class="ts-list-item">Application Software for Wireless Design and Test</li>
                        <li class="ts-list-item">Add-Ons for Wireless Design and Test</li>
                        <li class="ts-list-item">Semiconductor Test System</li>
                    </ul>
                </div>
            </div>
            <button class="ts-see-more">See more</button>
        </div>

        <div class="ts-tab-content" data-tab="systems-management">
            <div class="ts-columns-container">
                <div class="ts-column">
                    <ul class="ts-item-list arrow-list">
                        <li class="ts-list-item">SystemLink™</li>
                        <li class="ts-list-item">TestStand</li>
                        <li class="ts-list-item">DIAdem</li>
                    </ul>
                </div>
            </div>
            <button class="ts-see-more">See more</button>
        </div>

        <div class="ts-tab-content" data-tab="education">
            <div class="ts-columns-container">
                <div class="ts-column">
                    <ul class="ts-item-list arrow-list">
                        <li class="ts-list-item">Portable Student Devices</li>
                        <li class="ts-list-item">Radio Prototyping Hardware</li>
                        <li class="ts-list-item">Engineering Lab Stations</li>
                        <li class="ts-list-item">LabVIEW</li>
                        <li class="ts-list-item">Academic Volume License</li>
                        <li class="ts-list-item">Multisim Education Edition</li>
                    </ul>
                </div>
            </div>
            <button class="ts-see-more">See more</button>
        </div>
    </div>`;
  container.insertAdjacentHTML('beforeend', newDiv);
}

const tabs = document.querySelectorAll('.ts-tab');
const tabContents = document.querySelectorAll('.ts-tab-content');

const MAX_ITEMS_PER_COLUMN_DESKTOP = 8;
const MAX_ITEMS_MOBILE_INITIAL = 8;
const DESKTOP_VIEWPORT_WIDTH = 1200;

function manageItemVisibility(activeTabContent) {
  tabContents.forEach((content) => {
    const seeMoreBtn = content.querySelector('.ts-see-more');
    const allListItems = content.querySelectorAll('.ts-list-item');
    allListItems.forEach((item) => item.classList.remove('ts-hidden-by-default'));

    if (window.innerWidth < DESKTOP_VIEWPORT_WIDTH) {
      const listItemsToHide = Array.from(allListItems).slice(MAX_ITEMS_MOBILE_INITIAL);
      if (content === activeTabContent && content.getAttribute('data-shown-all-mobile') !== 'true') {
        listItemsToHide.forEach((item) => item.classList.add('ts-hidden-by-default'));
        if (listItemsToHide.length > 0) {
          seeMoreBtn.style.display = 'block';
        } else {
          seeMoreBtn.style.display = 'none';
        }
      } else if (content !== activeTabContent) {
        listItemsToHide.forEach((item) => item.classList.add('ts-hidden-by-default'));
        seeMoreBtn.style.display = 'block';
        content.removeAttribute('data-shown-all-mobile');
      } else {
        seeMoreBtn.style.display = 'none';
      }
    } else {
      allListItems.forEach((item) => item.classList.remove('ts-hidden-by-default'));
      seeMoreBtn.style.display = 'none';

      const columns = activeTabContent.querySelectorAll('.ts-column');
      columns.forEach((column) => {
        const itemsInColumn = column.querySelectorAll('.ts-list-item');
        Array.from(itemsInColumn).forEach((item, index) => {
          if (index >= MAX_ITEMS_PER_COLUMN_DESKTOP) {
            item.classList.add('ts-hidden-by-default');
          } else {
            item.classList.remove('ts-hidden-by-default');
          }
        });
      });
    }
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', function () {
    tabs.forEach((t) => t.classList.remove('active'));
    tabContents.forEach((c) => c.classList.remove('active'));

    this.classList.add('active');

    const tabId = this.getAttribute('data-tab');
    const activeTabContent = document.querySelector(`.ts-tab-content[data-tab="${tabId}"]`);
    activeTabContent.classList.add('active');

    manageItemVisibility(activeTabContent);
  });
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('ts-see-more')) {
    const tabContent = e.target.closest('.ts-tab-content');
    tabContent.querySelectorAll('.ts-list-item.ts-hidden-by-default').forEach((item) => {
      item.classList.remove('ts-hidden-by-default');
    });
    e.target.style.display = 'none';
    tabContent.setAttribute('data-shown-all-mobile', 'true');
  }
});

function checkViewportAndApplyVisibility() {
  const activeTabContent = document.querySelector('.ts-tab-content.active');
  if (activeTabContent) {
    manageItemVisibility(activeTabContent);
  }
}

checkViewportAndApplyVisibility();

window.addEventListener('resize', checkViewportAndApplyVisibility);
/* End of Shop By Application Area */
