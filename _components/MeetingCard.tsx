import {
  FaCalendar,
  FaClock,
  FaMapLocationDot,
  FaTriangleExclamation,
} from 'react-icons/fa6';

export default function MeetingCard() {
  return (
    <div className="card meeting-card">
      <h1 className="title">
        Tahuya River Valley Water District Commissioner Meeting
      </h1>
      <h2 className="subtitle">
        Meetings are held on the fourth Tuesday of every month and are
        open to the public
      </h2>

      <div className="meeting-info-item">
        <div className="meeting-info-icon">
          <FaCalendar />
        </div>
        <div className="meeting-info-content">
          Tuesday, August 26, 2025
        </div>
      </div>

      <div className="meeting-info-item">
        <div className="meeting-info-icon">
          <FaClock />
        </div>
        <div className="meeting-info-content">
          Meeting starts at 6:00PM
        </div>
      </div>

      <div className="meeting-info-item">
        <div className="meeting-info-icon">
          <FaMapLocationDot />
        </div>
        <div className="meeting-info-content">
          Tahuya River Valley Community Club:
          <address className="meeting-address">
            1665 NE Tahuya River Dr,
            <br />
            Tahuya, WA 98588
          </address>
        </div>
      </div>

      <div className="meeting-info-item">
        <div className="meeting-warning-icon">
          <FaTriangleExclamation />
        </div>
        <div className="meeting-warning-content">
          This location is only used for meetings. Please send all
          mail to the mailing address:
          <address className="meeting-mailing-address">
            Tahuya River Valley Water District
            <br />
            P.O. Box 849
            <br />
            Belfair, WA 98528
          </address>
        </div>
      </div>

      <a href="/meetings" className="btn-primary">
        View Meeting Minutes and Records
      </a>
    </div>
  );
}
