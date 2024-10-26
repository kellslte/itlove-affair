import React from "react";

interface Vendor {
  role: string;
  name: string;
  number: string;
}

const VendorCard: React.FC<Vendor> = ({ role, name, number }) => {
  return (
    <div className="text-tochi-brown text-center p-4 msm:mb-4">
      <p className="font-semibold text-2xl">{role}</p>
      <p className="font-medium text-lg">{name}</p>
      <p className="font-light text-base">{number}</p>
    </div>
  );
};

const VendorSection: React.FC = () => {
  const firstRow = [
    {
      role: "Master of Ceremony",
      name: "Chinaecherem Ugwu",
      number: "08060028940",
    },
    {
      role: "Groom & Groomsmen Outfit",
      name: "MerryMen Fashion",
      number: "08141748947",
    },
    {
      role: "Bride & Bridesmaids Outfit",
      name: "Dora's Fashion Hub",
      number: "07032248334",
    },
  ];

  const secondRow = [
    {
      role: "Fabrics Sourcing",
      name: "Ammiella Fabrics, Aba",
      number: "07066241074",
    },
    { role: "Cake", name: "Belmond Cakes", number: "09166918330" },
  ];

  const thirdRow = [
    {
      role: "Decoration",
      name: "The Shepherd Events & Interior",
      number: "07038021508",
    },
    { role: "Bridal Makeup", name: "Esther Patrick", number: "08059900068" },
    { role: "Caterer", name: "Better Cook, Abakaliki", number: "08035826709" },
  ];

  const fourthRow = [
    { role: "Souvenirs & Programme", name: "Miracle", number: "09052300864" },
    { role: "Sound & DJ", name: "LaudWorx Multimedia", number: "07082993939" },
  ];

  const fifthRow = [
    { role: "Photography", name: "Nemz Photography", number: "08062346139" },
    { role: "Photography", name: "BEC Photography", number: "07045332211" },
    {
      role: "Hosts & Hostesses",
      name: "Eagles' Ushers",
      number: "07063815964",
    },
  ];

  return (
    <section className="">
      <p className="text-center text-tochi-brown text-3xl font-bold my-10">
        Vendors
      </p>

      <div className="grid grid-cols-3 mb-6 msm:grid-cols-1 msm:mb-0">
        {firstRow.map((first, index) => (
          <VendorCard
            role={first.role}
            name={first.name}
            number={first.number}
            key={index}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 mb-6 msm:grid-cols-1 msm:m-0">
        {secondRow.map((second, index) => (
          <VendorCard
            role={second.role}
            name={second.name}
            number={second.number}
            key={index}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 mb-6 msm:grid-cols-1 msm:m-0">
        {thirdRow.map((third, index) => (
          <VendorCard
            role={third.role}
            name={third.name}
            number={third.number}
            key={index}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 mb-6 msm:grid-cols-1 msm:m-0">
        {fourthRow.map((fourth, index) => (
          <VendorCard
            role={fourth.role}
            name={fourth.name}
            number={fourth.number}
            key={index}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 mb-6 msm:grid-cols-1 msm:m-0">
        {fifthRow.map((fifth, index) => (
          <VendorCard
            role={fifth.role}
            name={fifth.name}
            number={fifth.number}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export { VendorSection };
