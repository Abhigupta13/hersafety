import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import Navbar from "./navbar/Navbar";

const VideoCallingPage = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [peerConnection, setPeerConnection] = useState(null);
  const [isCalling, setIsCalling] = useState(false);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    const setupLocalStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setLocalStream(stream);
        localVideoRef.current.srcObject = stream;
      } catch (error) {
        console.error(error);
      }
    };

    setupLocalStream();
  }, []);

  const startCall = async () => {
    try {
      const pc = new RTCPeerConnection();
      setPeerConnection(pc);

      // Add local stream to the PeerConnection
      localStream.getTracks().forEach((track) => {
        pc.addTrack(track, localStream);
      });

      // Handle incoming remote stream
      pc.ontrack = (event) => {
        setRemoteStream(event.streams[0]);
        remoteVideoRef.current.srcObject = event.streams[0];
      };

      // Create an offer and set it as the local description
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      // Send the offer to the remote peer using a signaling server
      const offerMessage = {
        type: "offer",
        offer: offer,
      };
      sendMessage(offerMessage);

      setIsCalling(true);
    } catch (error) {
      console.error(error);
    }
  };

  const hangupCall = () => {
    // Close the local stream and remove it from the local video element
    localStream.getTracks().forEach((track) => {
      track.stop();
    });
    localVideoRef.current.srcObject = null;

    // Close the remote stream and remove it from the remote video element
    remoteStream.getTracks().forEach((track) => {
      track.stop();
    });
    remoteVideoRef.current.srcObject = null;

    // Close the PeerConnection and reset its state
    peerConnection.close();
    setPeerConnection(null);

    setIsCalling(false);
  };

  const sendMessage = (message) => {
    // Send the message to the signaling server
    const socket = io("http://localhost:3001"); // Replace with your own signaling server URL
    socket.emit("message", message);
  };

  return (
    <div>
      <Navbar/>
      <nav style={{ backgroundColor: "green", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", marginTop:"76px" }}>
        <h1 style={{ color: "white" }}>Video calling support for mental health</h1>
      </nav>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 50px)", padding: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "0 10px" }}>
          <div style={{ backgroundColor: "white", borderRadius: "10px", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", padding: "20px" }}>
            {localStream && (
              <video id='localVideo'
              ref={localVideoRef}
              autoPlay
              muted
              style={{ width: "320px", height: "240px", objectFit: "cover", backgroundColor: "black" }}
            ></video>
          )}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {!isCalling && (
              <button
                style={{
                  marginTop: "10px",
                  backgroundColor: "green",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={startCall}
              >
                Start Call
              </button>
            )}
            {isCalling && (
              <button
                style={{
                  marginTop: "10px",
                  backgroundColor: "white",
                  color: "green",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={hangupCall}
              >
                Hang Up
              </button>
            )}
          </div>
        </div>
        <div style={{ marginTop: "20px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", padding: "20px", textAlign: "center" }}>
          <h2>Community Details</h2>
          <p>
            This video calling app is built for women to connect with each other and create strong networks for support and empowerment. Join our community and start making meaningful connections
            today!
          </p>
          <button style={{ marginTop: "10px", backgroundColor: "green", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer" }}>Join Now</button>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "0 10px" }}>
        {remoteStream && (
          <div style={{ backgroundColor: "white", borderRadius: "10px", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", padding: "20px" }}>
            <video id="remoteVideo" ref={remoteVideoRef} autoPlay style={{ width: "320px", height: "240px", objectFit: "cover", backgroundColor: "black" }}></video>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default VideoCallingPage;
