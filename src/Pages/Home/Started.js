import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StartedIcons from "./StartedIcons/StartedIcon";

// icons
import shuttle from "../../assets/shuttle.png";
import arrow from "../../assets/arrow.png";
import arrow2 from "../../assets/arrow-2.png";
import finish from "../../assets/finish.png";
import done from "../../assets/done.png";
import tips from "../../assets/tips.png";
import thankYou from "../../assets/thank-you.png";

const Started = () => {
  return (
    <section className="pb-32 mx-auto">
      <h2 className="text-5xl font-semibold text-center lg:mb-8">
        Get Started
      </h2>
      <div className="react-timeline">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#ff7607", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff7607" }}
            date="Step 1"
            iconStyle={{
              background: "#ff7607",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            icon={<StartedIcons icon={shuttle} />}
          >
            <h3 className="vertical-timeline-element-title text-white font-semibold text-xl">
              Registration
            </h3>
            <p className="text-white">Create an account to Alpha Steelwork</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#232F3C",
              color: "#232F3C",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232F3C" }}
            iconStyle={{
              background: "#232F3C",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "scaleX(-1)",
            }}
            date="Step 2"
            icon={<StartedIcons icon={arrow} />}
            position="right"
          >
            <h3 className="vertical-timeline-element-title text-white font-semibold text-xl">
              Purchase
            </h3>
            <p className="text-white">
              Purchase a product by clicking purchase button. You will see a
              notification upon successful purchase.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff7607" }}
            iconStyle={{
              background: "#fff",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            date="Step 3"
            icon={<StartedIcons icon={arrow2} />}
          >
            <h3 className="vertical-timeline-element-title text-primary font-semibold text-xl">
              Dashboard
            </h3>
            <p className="text-primary">Click Dashboard on the menu</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#ff7607", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff7607" }}
            date="Step 4"
            iconStyle={{
              background: "#ff7607",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "scaleX(-1)",
            }}
            icon={<StartedIcons icon={arrow} />}
          >
            <h3 className="vertical-timeline-element-title text-white font-semibold text-xl">
              My Orders
            </h3>
            <p className="text-white">
              Select My Orders from Dashboard. You can see all your purchased
              products here
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#232F3C", color: "#232F3C" }}
            contentArrowStyle={{ borderRight: "7px solid  #232F3C" }}
            iconStyle={{
              background: "#232F3C",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            date="Step 5"
            icon={<StartedIcons icon={arrow} />}
          >
            <h3 className="vertical-timeline-element-title text-white font-semibold text-xl">
              Pay or Delete
            </h3>
            <p className="text-white">
              Click "pay" To complete payment <br />
              Or, click "delete" to delete your order
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff7607" }}
            iconStyle={{
              background: "#fff",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "scaleX(-1)",
            }}
            date="Step 6"
            icon={<StartedIcons icon={finish} />}
          >
            <h3 className="vertical-timeline-element-title text-primary font-semibold text-xl">
              Complete Payment
            </h3>
            <p className="text-primary">
              You can pay using any type of card (e.g. Visa card, Master Card,
              American Card etc)
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#ff7607", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff7607" }}
            date="Done"
            iconStyle={{
              background: "#ff7607",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            icon={<StartedIcons icon={done} />}
          >
            <h3 className="vertical-timeline-element-title text-white font-semibold text-xl">
              Congratulations!
            </h3>
            <p className="text-white">
              You have are all done. You will your TransactionId upon successful
              payment. You can also check it on My Orders.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#232F3C", color: "#232F3C" }}
            contentArrowStyle={{ borderRight: "7px solid  #232F3C" }}
            iconStyle={{
              background: "#232F3C",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            date="Pro Tips"
            icon={<StartedIcons icon={tips} />}
          >
            <p className="text-white">
              <li>You can edit your profile on Profile section</li>
              <li>You can leave a review on Add A Review section</li>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff7607" }}
            iconStyle={{
              background: "#fff",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "scaleX(-1)",
            }}
            icon={<StartedIcons icon={thankYou} />}
          >
            <p className="text-primary">Thank you for buying from us!</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Started;
