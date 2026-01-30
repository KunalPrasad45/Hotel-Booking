import { useContext, useEffect, useState } from "react";
import { bookingData } from "../../assets/assets";

import {
  MapPin,
  Calendar,
  Users,
  CreditCard,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  Trash2,
} from "lucide-react";

const Bookings = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500";
      case "pending":
        return "bg-yellow-500";
      case "cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case "confirmed":
        return CheckCircle;
      case "pending":
        return Clock;
      case "cancelled":
        return XCircle;
      default:
        return Clock;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "confirmed":
        return CheckCircle;
      case "pending":
        return Clock;
      case "cancelled":
        return XCircle;
      default:
        return Clock;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-2">
      <div className="max-w-7xl mx-auto px-4 pt-2">
        {/* Header */}
        <div className="text-center mb-2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">My Bookings</h1>
          <p className="text-gray-600 text-lg">
            Here are your hotel bookings. You can view details and manage your
            reservations.
          </p>
        </div>

        {/* Bookings List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Desktop Header */}
          <div className="hidden md:grid md:grid-cols-12 bg-gray-50 px-6 py-4 border-b border-gray-200 font-semibold text-gray-700">
            <div className="col-span-4">Hotel & Room</div>
            <div className="col-span-3">Dates</div>
            <div className="col-span-2">Payment</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1">Actions</div>
          </div>

          {/* Bookings */}
          <div className="divide-y divide-gray-100">
            {bookingData.map((booking) => {
              const StatusIcon = getStatusIcon(booking.status);
              return (
                <div
                  key={booking._id}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start md:items-center">
                    {/* Hotel & Room Info */}
                    <div className="col-span-1 md:col-span-4">
                      <div className="flex gap-4">
                        <img
                          src={booking.room.images[0]}
                          alt={booking.room.roomType}
                          className="w-20 h-16 md:w-24 md:h-20 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-800 text-lg mb-1">
                            {booking.hotel.name}
                          </h3>
                          <p className="text-blue-600 font-medium mb-1">
                            {booking.room.roomType}
                          </p>
                          <div className="flex items-center gap-1 text-gray-500 text-sm mb-1">
                            <MapPin className="w-3 h-3" />
                            <span className="truncate">
                              {booking.hotel.address}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <Users className="w-3 h-3" />
                            <span>
                              {booking.guests} Guest
                              {booking.guests > 1 ? "s" : ""}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dates */}
                    <div className="col-span-1 md:col-span-3">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-500">Check-in</p>
                            <p className="font-medium text-gray-800">
                              {new Date(booking.checkInDate).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "short",
                                  month: "short",
                                  day: "numeric",
                                },
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-500">Check-out</p>
                            <p className="font-medium text-gray-800">
                              {new Date(
                                booking.checkOutData,
                              ).toLocaleDateString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment */}
                    <div className="col-span-1 md:col-span-2">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {booking.paymenyMethod}
                          </span>
                        </div>
                        <p className="font-bold text-lg text-gray-800">
                          ${booking.totalPrice}
                        </p>
                        <div
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            booking.isPaid
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {booking.isPaid ? "Paid" : "Pay Now"}
                          {/* <button
                            onClick={() => handlePayment(booking._id)}
                            className="cursor-pointer"
                          >
                            
                          </button> */}
                        </div>
                      </div>
                    </div>

                    {/* Status */}
                    <div className="col-span-1 md:col-span-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${getStatusColor(
                            booking.status,
                          )}`}
                        ></div>
                        <StatusIcon
                          className={`w-4 h-4 ${getStatusTextColor(
                            booking.status,
                          )}`}
                        />
                        <span
                          className={`font-medium capitalize ${getStatusTextColor(
                            booking.status,
                          )}`}
                        >
                          {booking.status}
                        </span>
                      </div>
                    </div>
                    {/* Actions */}
                    <div className="col-span-1 md:col-span-1">
<div className="flex gap-2">
  {booking.status !== "cancelled" && (
    <button onClick={""}
    className="p-2 text-red-600 hover:bg-red-500 rounded-lg transistion-colors"
    title="Cancel Booking">
      <Trash2 className="w-4 h-4"/>

    </button>
  )}

</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
