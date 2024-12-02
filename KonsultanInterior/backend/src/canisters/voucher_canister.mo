actor VoucherCanister {
  var services : [Service] = [
    Service("Interior Design", "Desain interior rumah", 500),
    Service("Furniture Design", "Desain furnitur custom", 300),
    Service("Full House Renovation", "Renovasi rumah secara menyeluruh", 1500)
  ];

  type Service = {
    name: Text;
    description: Text;
    price: Int;
  };

  public func getServices() : async [Service] {
    return services;
  };
};
