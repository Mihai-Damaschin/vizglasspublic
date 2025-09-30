'use client'

import { CSSProperties } from "react";

import { Image, Button } from "antd";
import {
  CheckCircleOutlined,
  SafetyOutlined,
  ThunderboltOutlined,
  HomeOutlined,
  StarOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { colors } from "@/lib/colors";
import { useParams, useRouter } from "next/navigation";

const ProductPage = () => {
  const { slug } = useParams();
  const router = useRouter();

  // Mock product data
  const productData: { [key: string]: any } = {
    smart: {
      name: "Smart Windows",
      category: "PVC Windows",
      tagline: "The Future of Home Automation",
      description:
        "Experience the perfect blend of technology and comfort with our Smart Windows. Featuring advanced automation, energy efficiency, and seamless smart home integration.",
      features: [
        {
          icon: <ThunderboltOutlined />,
          title: "Smart Home Integration",
          desc: "Connect with Alexa, Google Home, and HomeKit",
        },
        {
          icon: <ToolOutlined />,
          title: "Automated Control",
          desc: "Schedule and automate based on weather and time",
        },
        {
          icon: <SafetyOutlined />,
          title: "Energy-Efficient Design",
          desc: "Reduce energy costs by up to 40%",
        },
        {
          icon: <CheckCircleOutlined />,
          title: "Remote Monitoring",
          desc: "Control from anywhere via mobile app",
        },
        {
          icon: <StarOutlined />,
          title: "Triple Glazing",
          desc: "Maximum insulation and noise reduction",
        },
        {
          icon: <HomeOutlined />,
          title: "Modern Design",
          desc: "Sleek aesthetics for contemporary homes",
        },
      ],
      specs: {
        Glazing: "Triple-glazed",
        "U-Value": "0.8 W/m²K",
        "Sound Insulation": "Up to 45 dB",
        Security: "5-point locking system",
        Material: "Premium UPVC",
        Warranty: "10 years",
      },
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
      ],
    },
    premium: {
      name: "Premium Windows",
      category: "PVC Windows",
      tagline: "Luxury Meets Performance",
      description:
        "Elevate your home with our Premium Windows. Designed for those who demand excellence in both aesthetics and functionality.",
      features: [
        {
          icon: <StarOutlined />,
          title: "Superior Insulation",
          desc: "Industry-leading thermal performance",
        },
        {
          icon: <HomeOutlined />,
          title: "Elegant Design",
          desc: "Refined aesthetics for luxury homes",
        },
        {
          icon: <SafetyOutlined />,
          title: "Noise Reduction",
          desc: "Up to 50 dB sound insulation",
        },
        {
          icon: <CheckCircleOutlined />,
          title: "UV Protection",
          desc: "Protect interiors from sun damage",
        },
        {
          icon: <ToolOutlined />,
          title: "Multi-Point Locking",
          desc: "Enhanced security features",
        },
        {
          icon: <ThunderboltOutlined />,
          title: "Weather Resistant",
          desc: "Built to withstand extreme conditions",
        },
      ],
      specs: {
        Glazing: "Triple-glazed with argon",
        "U-Value": "0.7 W/m²K",
        "Sound Insulation": "Up to 50 dB",
        Security: "7-point locking system",
        Material: "Premium UPVC with aluminum core",
        Warranty: "15 years",
      },
      images: [
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200",
        "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1200",
      ],
    },
    optim: {
      name: "Optim Windows",
      category: "PVC Windows",
      tagline: "Quality at the Right Price",
      description:
        "Get the best value with our Optim Windows. Perfect balance of quality, performance, and affordability for every home.",
      features: [
        {
          icon: <CheckCircleOutlined />,
          title: "Cost-Effective",
          desc: "Premium quality at an affordable price",
        },
        {
          icon: <SafetyOutlined />,
          title: "Durable Construction",
          desc: "Built to last for decades",
        },
        {
          icon: <ThunderboltOutlined />,
          title: "Energy Efficient",
          desc: "Reduce heating and cooling costs",
        },
        {
          icon: <HomeOutlined />,
          title: "Classic Design",
          desc: "Timeless style for any home",
        },
        {
          icon: <ToolOutlined />,
          title: "Easy Maintenance",
          desc: "Simple to clean and maintain",
        },
        {
          icon: <StarOutlined />,
          title: "Reliable Performance",
          desc: "Consistent quality you can trust",
        },
      ],
      specs: {
        Glazing: "Double-glazed",
        "U-Value": "1.2 W/m²K",
        "Sound Insulation": "Up to 35 dB",
        Security: "3-point locking system",
        Material: "Quality UPVC",
        Warranty: "7 years",
      },
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200",
      ],
    },
    "alu-classic": {
      name: "Classic Aluminium",
      category: "Aluminium Windows",
      tagline: "Strength Meets Style",
      description:
        "Discover the durability of aluminium with our Classic range. Perfect for modern and traditional homes alike.",
      features: [
        {
          icon: <SafetyOutlined />,
          title: "Superior Strength",
          desc: "Aluminium frame for maximum durability",
        },
        {
          icon: <HomeOutlined />,
          title: "Slim Profile",
          desc: "More glass, more light",
        },
        {
          icon: <ToolOutlined />,
          title: "Low Maintenance",
          desc: "Easy care, long-lasting finish",
        },
        {
          icon: <ThunderboltOutlined />,
          title: "Weather Resistant",
          desc: "Corrosion-proof construction",
        },
        {
          icon: <StarOutlined />,
          title: "Custom Colors",
          desc: "Wide range of powder-coated finishes",
        },
        {
          icon: <CheckCircleOutlined />,
          title: "Thermal Break",
          desc: "Enhanced energy efficiency",
        },
      ],
      specs: {
        Glazing: "Double-glazed",
        "U-Value": "1.4 W/m²K",
        "Sound Insulation": "Up to 38 dB",
        Security: "5-point locking system",
        Material: "Powder-coated aluminium",
        Warranty: "12 years",
      },
      images: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      ],
    },
    "alu-modern": {
      name: "Modern Aluminium",
      category: "Aluminium Windows",
      tagline: "Contemporary Design Excellence",
      description:
        "Push the boundaries of design with our Modern Aluminium Windows. Featuring ultra-slim frames and expansive glass.",
      features: [
        {
          icon: <StarOutlined />,
          title: "Ultra-Slim Frames",
          desc: "Maximum glass area for stunning views",
        },
        {
          icon: <HomeOutlined />,
          title: "Minimalist Design",
          desc: "Perfect for contemporary architecture",
        },
        {
          icon: <ThunderboltOutlined />,
          title: "High Performance",
          desc: "Excellent thermal and acoustic insulation",
        },
        {
          icon: <SafetyOutlined />,
          title: "Enhanced Security",
          desc: "Multi-point locking as standard",
        },
        {
          icon: <ToolOutlined />,
          title: "Precision Engineering",
          desc: "Smooth operation and perfect fit",
        },
        {
          icon: <CheckCircleOutlined />,
          title: "Sustainable",
          desc: "100% recyclable materials",
        },
      ],
      specs: {
        Glazing: "Triple-glazed",
        "U-Value": "0.9 W/m²K",
        "Sound Insulation": "Up to 42 dB",
        Security: "7-point locking system",
        Material: "Premium aluminium with thermal break",
        Warranty: "15 years",
      },
      images: [
        "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1200",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200",
      ],
    },
  };

  const product = productData[slug as string] || productData.smart;

  const containerStyle: CSSProperties = {
    minHeight: "100vh",
    background: colors.background.light,
  };

  // Hero Section Styles
  const heroStyle: CSSProperties = {
    position: "relative",
    height: "600px",
    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };

  const heroOverlayStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    zIndex: 1,
  };

  const heroContentStyle: CSSProperties = {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    color: colors.light,
    maxWidth: "800px",
    padding: "0 40px",
  };

  const heroCategoryStyle: CSSProperties = {
    fontSize: "16px",
    fontWeight: 500,
    letterSpacing: "2px",
    textTransform: "uppercase",
    opacity: 0.9,
    marginBottom: "15px",
  };

  const heroTitleStyle: CSSProperties = {
    fontSize: "64px",
    fontWeight: 700,
    marginBottom: "20px",
    lineHeight: "1.2",
  };

  const heroTaglineStyle: CSSProperties = {
    fontSize: "24px",
    fontWeight: 300,
    opacity: 0.95,
    marginBottom: "40px",
  };

  const heroButtonStyle: CSSProperties = {
    height: "60px",
    fontSize: "18px",
    padding: "0 50px",
    background: colors.light,
    color: colors.primary,
    border: "none",
    fontWeight: 600,
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  };

  const contentStyle: CSSProperties = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "80px 60px",
  };

  const sectionTitleStyle: CSSProperties = {
    fontSize: "40px",
    fontWeight: 700,
    color: colors.text.dark,
    marginBottom: "20px",
    textAlign: "center",
  };

  const sectionDescStyle: CSSProperties = {
    fontSize: "18px",
    color: colors.text.dark,
    opacity: 0.7,
    marginBottom: "60px",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto 60px",
    lineHeight: "1.8",
  };

  // Features Grid Styles
  const featuresGridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
    marginBottom: "80px",
  };

  const featureCardStyle: CSSProperties = {
    background: colors.light,
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
    cursor: "default",
  };

  const featureIconStyle: CSSProperties = {
    fontSize: "40px",
    color: colors.primary,
    marginBottom: "20px",
  };

  const featureTitleStyle: CSSProperties = {
    fontSize: "22px",
    fontWeight: 600,
    color: colors.text.dark,
    marginBottom: "12px",
  };

  const featureDescStyle: CSSProperties = {
    fontSize: "16px",
    color: colors.text.dark,
    opacity: 0.7,
    lineHeight: "1.6",
  };

  // Gallery Styles
  const galleryStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "25px",
    marginBottom: "80px",
  };

  const imageWrapperStyle: CSSProperties = {
    borderRadius: "16px",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 6px 25px rgba(0,0,0,0.12)",
    transition: "all 0.3s ease",
    aspectRatio: "4/3",
  };

  const imageStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  // Specs Styles
  const specsGridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    background: colors.light,
    padding: "50px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    marginBottom: "80px",
  };

  const specItemStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const specLabelStyle: CSSProperties = {
    fontSize: "14px",
    fontWeight: 600,
    color: colors.primary,
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const specValueStyle: CSSProperties = {
    fontSize: "18px",
    fontWeight: 500,
    color: colors.text.dark,
  };

  // CTA Section Styles
  const ctaSectionStyle: CSSProperties = {
    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
    padding: "80px 60px",
    borderRadius: "20px",
    textAlign: "center",
    color: colors.light,
    boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
  };

  const ctaTitleStyle: CSSProperties = {
    fontSize: "42px",
    fontWeight: 700,
    marginBottom: "20px",
  };

  const ctaDescStyle: CSSProperties = {
    fontSize: "20px",
    opacity: 0.95,
    marginBottom: "40px",
    maxWidth: "600px",
    margin: "0 auto 40px",
    lineHeight: "1.7",
  };

  const ctaButtonsStyle: CSSProperties = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const primaryCtaButtonStyle: CSSProperties = {
    height: "60px",
    fontSize: "18px",
    padding: "0 50px",
    background: colors.light,
    color: colors.primary,
    border: "none",
    fontWeight: 600,
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
  };

  const secondaryCtaButtonStyle: CSSProperties = {
    height: "60px",
    fontSize: "18px",
    padding: "0 50px",
    background: "transparent",
    color: colors.light,
    border: `2px solid ${colors.light}`,
    fontWeight: 600,
  };

  return (
    <>
      <div style={containerStyle}>
        {/* Hero Section */}
        <div style={heroStyle}>
          <div style={heroOverlayStyle} />
          <div style={heroContentStyle}>
            <div style={heroCategoryStyle}>{product.category}</div>
            <h1 style={heroTitleStyle}>{product.name}</h1>
            <p style={heroTaglineStyle}>{product.tagline}</p>
            <Button
              size="large"
              style={heroButtonStyle}
              onClick={() => {
                const element = document.getElementById("product-details");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Features
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div style={contentStyle} id="product-details">
          {/* Description */}
          <p style={sectionDescStyle}>{product.description}</p>

          {/* Features Section */}
          <h2 style={sectionTitleStyle}>Key Features</h2>
          <div style={featuresGridStyle}>
            {product.features.map((feature: any, index: number) => (
              <div
                key={index}
                style={featureCardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.08)";
                }}
              >
                <div style={featureIconStyle}>{feature.icon}</div>
                <h3 style={featureTitleStyle}>{feature.title}</h3>
                <p style={featureDescStyle}>{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Gallery Section */}
          <h2 style={sectionTitleStyle}>Gallery</h2>
          <Image.PreviewGroup>
            <div style={galleryStyle}>
              {product.images.map((image: string, index: number) => (
                <div
                  key={index}
                  style={imageWrapperStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 40px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 25px rgba(0,0,0,0.12)";
                  }}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    style={imageStyle}
                    preview={{
                      mask: "Click to View",
                    }}
                  />
                </div>
              ))}
            </div>
          </Image.PreviewGroup>

          {/* Specifications Section */}
          <h2 style={sectionTitleStyle}>Technical Specifications</h2>
          <div style={specsGridStyle}>
            {Object.entries(product.specs).map(
              ([key, value]: [string, any]) => (
                <div key={key} style={specItemStyle}>
                  <div style={specLabelStyle}>{key}</div>
                  <div style={specValueStyle}>{value}</div>
                </div>
              ),
            )}
          </div>

          {/* CTA Section */}
          <div style={ctaSectionStyle}>
            <h2 style={ctaTitleStyle}>Ready to Transform Your Home?</h2>
            <p style={ctaDescStyle}>
              Get a free consultation and quote for your {product.name}. Our
              experts are ready to help you make the best choice.
            </p>
            <div style={ctaButtonsStyle}>
              <Button
                size="large"
                style={primaryCtaButtonStyle}
                onClick={() => router.push("/contact")}
              >
                Request a Quote
              </Button>
              <Button
                size="large"
                style={secondaryCtaButtonStyle}
                onClick={() => router.push("/case-studies")}
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
