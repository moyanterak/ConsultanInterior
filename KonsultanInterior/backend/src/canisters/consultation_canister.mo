actor ConsultationCanister {
  var consultationRequests : [ConsultationRequest] = [];

  type ConsultationRequest = {
    name: Text;
    email: Text;
    serviceId: Text;
    message: Text;
  };

  public func createConsultationRequest(request: ConsultationRequest) : async Text {
    consultationRequests := Array.append(consultationRequests, [request]);
    return "Permintaan konsultasi berhasil dikirim.";
  };

  public func getConsultationRequests() : async [ConsultationRequest] {
    return consultationRequests;
  };
};
