import { MenuProps } from "antd";
import Link from "next/link";

// PVC items
const pvcItems = [
  {
    key: "pvc_salamander",
    label: <Link href="/[locale]/product/smart">Salamander</Link>,
    children: [
      {
        key: "pvc_salamander_72",
        label: <Link href="/[locale]/product/72">72 mm</Link>,
      },
      {
        key: "pvc_salamander_76",
        label: <Link href="/[locale]/product/76">76 mm</Link>,
      },
      {
        key: "pvc_salamander_82",
        label: <Link href="/[locale]/product/82">82 mm</Link>,
      },
      {
        key: "pvc_salamander_92",
        label: <Link href="/[locale]/product/92">92 mm</Link>,
      },
    ],
  },
  {
    key: "pvc_kommerling",
    label: <Link href="/[locale]/product/premium">Kömmerling</Link>,
    children: [
      {
        key: "pvc_kommerling_70",
        label: <Link href="/[locale]/product/70">70 mm</Link>,
      },
      {
        key: "pvc_kommerling_80",
        label: <Link href="/[locale]/product/80">80 mm</Link>,
      },
    ],
  },
  {
    key: "pvc_trocal",
    label: <Link href="/[locale]/product/optim">Trocal</Link>,
    children: [
      { key: "pvc_trocal_70", label: <Link href="/[locale]/product/70">70 mm</Link> },
    ],
  },
  {
    key: "pvc_profilink",
    label: <Link href="/[locale]/product/optim">Profilink</Link>,
    children: [
      { key: "pvc_profilink_60", label: <Link href="/[locale]/product/60">60 mm</Link> },
    ],
  },
];

// Aluminium items
const aluminiumItems = [
  {
    key: "alu_alutech",
    label: <Link href="/[locale]/product/alu-classic">Alutech</Link>,
    children: [
      { key: "alu_alutech_49", label: <Link href="/[locale]/product/49">49 mm</Link> },
      { key: "alu_alutech_62", label: <Link href="/[locale]/product/62">62 mm</Link> },
      { key: "alu_alutech_66", label: <Link href="/[locale]/product/66">66 mm</Link> },
    ],
  },
  {
    key: "alu_kurtoglu",
    label: <Link href="/[locale]/product/alu-modern">Kurtoglu</Link>,
    children: [
      { key: "alu_kurtoglu_50", label: <Link href="/[locale]/product/50">50 mm</Link> },
      { key: "alu_kurtoglu_60", label: <Link href="/[locale]/product/60">60 mm</Link> },
    ],
  },
];

// PVC + Aluminium
const pvcAluminiumItems = [
  {
    key: "mix_alutech",
    label: <Link href="/[locale]/product/alu-classic">Alutech</Link>,
    children: [
      { key: "mix_alutech_82", label: <Link href="/[locale]/product/82">82 mm</Link> },
    ],
  },
];

export const productsMenu: MenuProps["items"] = [
  {
    key: "windows",
    label: "Windows",
    children: [
      { key: "windows_pvc", label: "PVC", children: pvcItems },
      {
        key: "windows_mix",
        label: "PVC with Aluminium",
        children: pvcAluminiumItems,
      },
      { key: "windows_alu", label: "Aluminium", children: aluminiumItems },
    ],
  },
  {
    key: "doors",
    label: "Doors",
    children: [
      { key: "doors_pvc", label: "PVC", children: pvcItems },
      {
        key: "doors_mix",
        label: "PVC with Aluminium",
        children: pvcAluminiumItems,
      },
      { key: "doors_alu", label: "Aluminium", children: aluminiumItems },
    ],
  },
  {
    key: "balcons",
    label: "Balcons",
    children: [
      { key: "balcons_pvc", label: "PVC", children: pvcItems },
      {
        key: "balcons_mix",
        label: "PVC with Aluminium",
        children: pvcAluminiumItems,
      },
      { key: "balcons_alu", label: "Aluminium", children: aluminiumItems },
    ],
  },
  {
    key: "accessories",
    label: "Accessories",
    children: [
      { key: "accessories_mosquito", label: "Mosquito nets" },
      { key: "accessories_sill", label: "Sill" },
    ],
  },
  { key: "handles", label: "Handles" },
  { key: "glasses", label: "Glasses" },
];

// const normalizeMenu = (items: any, parentKey = "") => {
//   return items.map((item) => {
//     const key = parentKey ? `${parentKey}_${item.key}` : item.key;
//     return {
//       ...item,
//       key,
//       children: item.children ? normalizeMenu(item.children, key) : undefined,
//     };
//   });
// };
//
// export const productsMenu = normalizeMenu(rawProductsMenu);
