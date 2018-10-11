import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import IconStrip from "../../components/elements/IconStrip/IconStrip";
import SettingGeneralTab from "../../components/elements/SettingTab/elements/SettingGeneralTab";
import SettingMemberTab from "../../components/elements/SettingTab/elements/SettingMemberTab";
import SettingMessagingTab from "../../components/elements/SettingTab/elements/SettingMessagingTab";
import SettingAppearanceTab from "../../components/elements/SettingTab/elements/SettingAppearanceTab";
import SettingBlockedTab from "../../components/elements/SettingTab/elements/SettingBlockedTab";
import SettingUpgradeTab from "../../components/elements/SettingTab/elements/SettingUpgradeTab";
import SettingBillingTab from "../../components/elements/SettingTab/elements/SettingBillingTab";
class AppsettingContainer extends Component {
  state = {};
  render() {
    return (
      <Tabs>
        <section className="tab-container">
          <TabList>
            <Tab>
              <IconStrip title="General" color="cyan" icon="general" />
            </Tab>
            <Tab>
              <IconStrip title="Team member" color="pink" icon="member" />
            </Tab>
            <Tab>
              <IconStrip title="Messaging" color="green" icon="messaging" />
            </Tab>
            <Tab>
              <IconStrip title="Appearance" color="blue" icon="appearance" />
            </Tab>
            <Tab>
              <IconStrip title="Blocked people" color="red" icon="blocked" />
            </Tab>
            <Tab>
              <IconStrip title="Upgrade" color="yellow" icon="upgrade" />
            </Tab>
            <Tab>
              <IconStrip title="Billing" color="pink" icon="billing" />
            </Tab>
          </TabList>
        </section>

        <section className="tab-detail-container">
          <TabPanel>
            <SettingGeneralTab />
          </TabPanel>
          <TabPanel>
            <SettingMemberTab />
          </TabPanel>
          <TabPanel>
            <SettingMessagingTab />
          </TabPanel>
          <TabPanel>
            <SettingAppearanceTab />
          </TabPanel>
          <TabPanel>
            <SettingBlockedTab />
          </TabPanel>
          <TabPanel>
            <SettingUpgradeTab />
          </TabPanel>
          <TabPanel>
            <SettingBillingTab />
          </TabPanel>
        </section>
      </Tabs>
    );
  }
}

export default AppsettingContainer;
