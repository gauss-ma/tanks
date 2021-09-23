//Table 7.1-3: Properties of Select PetroChemicals
function PetroChemProperties() {
	// declare objects:
	var petroChem1 = {propName:"Acetaldehyde", CAS:"00075-07-0", M_L:44.05, W_L:6.54, S:"", P_VA:12.19, A:8.063, B:1637.1, C:295.47, T_Min:32, Tmax:94, N_BP:69};
	var petroChem2 = {propName:"Acetic acid", CAS:"00064-19-7", M_L:60.05, W_L:8.72, S:"", P_VA:0.176, A:7.557, B:1642.5, C:233.39, T_Min:63, Tmax:244, N_BP:244};
	var petroChem3 = {propName:"Acetic anhydride {acetic acid anhydride}", CAS:"00108-24-7", M_L:102.09, W_L:9.03, S:"", P_VA:0.053, A:7.122, B:1427.8, C:198.04, T_Min:145, Tmax:283, N_BP:282};
	var petroChem4 = {propName:"Acetone", CAS:"00067-64-1", M_L:58.08, W_L:6.55, S:"", P_VA:2.921, A:7.3, B:1312.3, C:240.71, T_Min:7, Tmax:454, N_BP:133};
	var petroChem5 = {propName:"Acetonitrile", CAS:"00075-05-8", M_L:41.05, W_L:6.56, S:"", P_VA:1.09, A:7.154, B:1355.4, C:235.3, T_Min:59, Tmax:192, N_BP:179};
	var petroChem6 = {propName:"Acrylamide", CAS:"00079-06-1", M_L:71.08, W_L:9.36, S:"", P_VA:0.0000857, A:11.293, B:3939.9, C:273.16, T_Min:"", Tmax:"", N_BP:379};
	var petroChem7 = {propName:"Acrylic acid {2-propenoic acid}", CAS:"00079-10-7", M_L:72.06, W_L:8.77, S:"", P_VA:1.344, A:5.652, B:648.6, C:154.68, T_Min:68, Tmax:158, N_BP:282};
	var petroChem8 = {propName:"Acrylonitrile {2-propenenitrile}", CAS:"00107-13-1", M_L:53.06, W_L:6.73, S:"", P_VA:1.383, A:6.942, B:1255.9, C:231.3, T_Min:-60, Tmax:172, N_BP:172};
	var petroChem9 = {propName:"Allyl alcohol", CAS:"00107-18-6", M_L:58.08, W_L:7.13, S:"", P_VA:0.326, A:11.658, B:4510.2, C:416.8, T_Min:70, Tmax:207, N_BP:206};
	var petroChem10 = {propName:"Allyl chloride {3-chloro-1-propene}", CAS:"00107-05-1", M_L:76.52, W_L:7.83, S:"", P_VA:4.702, A:5.297, B:418.4, C:128.68, T_Min:55, Tmax:111, N_BP:113};
	var petroChem11 = {propName:"Aniline", CAS:"00062-53-3", M_L:93.13, W_L:8.53, S:"", P_VA:0.0058, A:7.221, B:1661.9, C:199.1, T_Min:88, Tmax:363, N_BP:363};
	var petroChem12 = {propName:"Benzene", CAS:"00071-43-2", M_L:78.11, W_L:7.32, S:"", P_VA:1.171, A:6.906, B:1211, C:220.79, T_Min:46, Tmax:217, N_BP:176};
	var petroChem13 = {propName:"Benz[a]anthracene", CAS:"00056-55-3", M_L:228.29, W_L:"", S:"", P_VA:0.000000000792, A:11.528, B:5461, C:273.15, T_Min:219, Tmax:260, N_BP:820};
	var petroChem14 = {propName:"Benzo[a]pyrene", CAS:"00050-32-8", M_L:252.31, W_L:"", S:"", P_VA:0.0000000000229, A:12.482, B:6181, C:273.15, T_Min:185, Tmax:316, N_BP:923};
	var petroChem15 = {propName:"Benzo[ghi]perylene", CAS:"00191-24-2", M_L:276.33, W_L:"", S:"", P_VA:0.000000000000207, A:11.82, B:6580, C:273.15, T_Min:391, Tmax:513, N_BP:""};
	var petroChem16 = {propName:"Biphenyl", CAS:"00092-52-4", M_L:154.21, W_L:8.68, S:"", P_VA:0.000237, A:7.245, B:1998.7, C:202.73, T_Min:156, Tmax:520, N_BP:489};
	var petroChem17 = {propName:"Butadiene (1,3) {divinyl}", CAS:"00106-99-0", M_L:54.09, W_L:5.13, S:"", P_VA:30.22, A:6.873, B:941.7, C:240.4, T_Min:-104, Tmax:29, N_BP:24};
	var petroChem18 = {propName:"Butane (n)", CAS:"00106-97-8", M_L:58.12, W_L:4.78, S:"", P_VA:25.67, A:6.725, B:909.7, C:237, T_Min:-108, Tmax:31, N_BP:32};
	var petroChem19 = {propName:"Butene (1)", CAS:"00106-98-9", M_L:56.11, W_L:4.91, S:"", P_VA:30.83, A:7.122, B:1099.2, C:264.89, T_Min:-108, Tmax:25, N_BP:21};
	var petroChem20 = {propName:"Butene (cis-2)", CAS:"00590-18-1", M_L:56.11, W_L:5.14, S:"", P_VA:22.62, A:6.863, B:957.1, C:236.65, T_Min:-94, Tmax:73, N_BP:39};
	var petroChem21 = {propName:"Butene (2-methyl-1)", CAS:"00563-46-2", M_L:70.13, W_L:5.43, S:"", P_VA:8.257, A:6.862, B:1047.8, C:232.06, T_Min:34, Tmax:145, N_BP:88};
	var petroChem22 = {propName:"Butene (trans-2)", CAS:"00624-64-6", M_L:56.11, W_L:5, S:"", P_VA:24.97, A:6.919, B:982.2, C:242.38, T_Min:-97, Tmax:34, N_BP:34};
	var petroChem23 = {propName:"Butyl alcohol (n) {butanol (1)}", CAS:"00071-36-3", M_L:74.12, W_L:6.76, S:"", P_VA:0.062, A:7.421, B:1351.6, C:179.81, T_Min:73, Tmax:244, N_BP:243};
	var petroChem24 = {propName:"Butyl alcohol (tert) {1,1-dimethyl ethanol}", CAS:"00075-65-0", M_L:74.12, W_L:6.58, S:"", P_VA:0.424, A:7.373, B:1174.9, C:179.23, T_Min:103, Tmax:180, N_BP:180};
	var petroChem25 = {propName:"Butyl chloride (-n) {1-chloro-butane}", CAS:"00109-69-3", M_L:92.57, W_L:7.4, S:"", P_VA:1.255, A:6.871, B:1182.9, C:218.27, T_Min:2, Tmax:173, N_BP:170};
	var petroChem26 = {propName:"Butyl ether (di-tert)", CAS:"06163-66-2", M_L:130.23, W_L:6.39, S:"", P_VA:0.381, A:6.59, B:1157.7, C:203.05, T_Min:39, Tmax:228, N_BP:224};
	var petroChem27 = {propName:"Carbon disulfide", CAS:"00075-15-0", M_L:76.14, W_L:10.54, S:"", P_VA:4.817, A:6.942, B:1168.6, C:241.53, T_Min:38, Tmax:176, N_BP:115};
	var petroChem28 = {propName:"Carbon tetrachloride", CAS:"00056-23-5", M_L:153.82, W_L:13.31, S:"", P_VA:1.431, A:6.898, B:1221.8, C:227.41, T_Min:68, Tmax:172, N_BP:170};
	var petroChem29 = {propName:"Chlorobenzene", CAS:"00108-90-7", M_L:112.56, W_L:9.23, S:"", P_VA:0.134, A:6.986, B:1435.7, C:218.03, T_Min:144, Tmax:269, N_BP:269};
	var petroChem30 = {propName:"Chlorobutane (2)", CAS:"00078-86-4", M_L:92.57, W_L:7.27, S:"", P_VA:1.255, A:6.871, B:1182.9, C:218.27, T_Min:2, Tmax:173, N_BP:170};
	var petroChem31 = {propName:"Chloroform", CAS:"00067-66-3", M_L:119.38, W_L:12.38, S:"", P_VA:2.468, A:7.083, B:1233.1, C:232.2, T_Min:-73, Tmax:142, N_BP:142};
	var petroChem32 = {propName:"Chloroprene {2-chloro-1,3-butadiene}", CAS:"00126-99-8", M_L:88.54, W_L:7.98, S:"", P_VA:2.736, A:6.291, B:841.9, C:187.79, T_Min:68, Tmax:140, N_BP:140};
	var petroChem33 = {propName:"Chlorotoluene (o) {1-chloro-2methylbenzene}", CAS:"00095-49-8", M_L:126.58, W_L:9.04, S:"", P_VA:0.039, A:7.363, B:1768.1, C:234.76, T_Min:42, Tmax:319, N_BP:318};
	var petroChem34 = {propName:"Chrysene {benzo[a]phenanthrene}", CAS:"00218-01-9", M_L:228.29, W_L:10.63, S:"", P_VA:0.0000000000186, A:12.32, B:6160, C:273.15, T_Min:185, Tmax:374, N_BP:838};
	var petroChem35 = {propName:"Cresol (m) {3-methyl-phenol}", CAS:"00108-39-4", M_L:108.14, W_L:8.63, S:"", P_VA:0.0013, A:7.477, B:1833.1, C:196.74, T_Min:301, Tmax:394, N_BP:396};
	var petroChem36 = {propName:"Cresol (o) {2-methyl-phenol}", CAS:"00095-48-7", M_L:108.14, W_L:9.47, S:"", P_VA:0.0016, A:6.843, B:1391.3, C:160.18, T_Min:248, Tmax:376, N_BP:376};
	var petroChem37 = {propName:"Cresol (p) {4-methyl-phenol}", CAS:"00106-44-5", M_L:108.14, W_L:8.5, S:"", P_VA:0.00062, A:7.016, B:1498.6, C:160.55, T_Min:262, Tmax:395, N_BP:395};
	var petroChem38 = {propName:"Cyclohexane", CAS:"00110-82-7", M_L:84.16, W_L:6.46, S:"", P_VA:1.212, A:6.845, B:1203.5, C:222.86, T_Min:68, Tmax:179, N_BP:177};
	var petroChem39 = {propName:"Cyclohexanol", CAS:"00108-93-0", M_L:100.16, W_L:8.03, S:"", P_VA:0.0009, A:5.956, B:777.4, C:91.11, T_Min:201, Tmax:321, N_BP:320};
	var petroChem40 = {propName:"Cyclohexanone", CAS:"00108-94-1", M_L:98.14, W_L:7.91, S:"", P_VA:0.0042, A:5.978, B:1495.5, C:209.55, T_Min:193, Tmax:330, N_BP:311};
	var petroChem41 = {propName:"Cyclohexene", CAS:"00110-83-8", M_L:82.14, W_L:6.77, S:"", P_VA:0.11, A:5.872, B:1221.9, C:223.17, T_Min:98, Tmax:196, N_BP:181};
	var petroChem42 = {propName:"Cyclopentane", CAS:"00287-92-3", M_L:70.13, W_L:6.22, S:"", P_VA:4.171, A:6.878, B:1119.2, C:230.74, T_Min:60, Tmax:122, N_BP:121};
	var petroChem43 = {propName:"Cyclopentanone", CAS:"00120-92-3", M_L:84.12, W_L:7.92, S:"", P_VA:0.13, A:3.958, B:376.4, C:104.65, T_Min:32, Tmax:78, N_BP:266};
	var petroChem44 = {propName:"Cyclopentene", CAS:"00142-29-0", M_L:68.12, W_L:6.44, S:"", P_VA:3.264, A:6.921, B:1121.8, C:223.45, T_Min:"", Tmax:"", N_BP:111};
	var petroChem45 = {propName:"Decane (-n)", CAS:"00124-18-5", M_L:142.28, W_L:6.09, S:"", P_VA:0.011, A:3.085, B:440.6, C:116.25, T_Min:-21, Tmax:99, N_BP:345};
	var petroChem46 = {propName:"Dibromopropane (1,2)", CAS:"00078-75-1", M_L:201.89, W_L:16.13, S:"", P_VA:0.088, A:7.314, B:1667, C:234.85, T_Min:19, Tmax:287, N_BP:286};
	var petroChem47 = {propName:"Dibromopropane (1,3)", CAS:"00109-64-8", M_L:201.89, W_L:16.55, S:"", P_VA:0.029, A:7.309, B:1776.7, C:233.46, T_Min:49, Tmax:333, N_BP:314};
	var petroChem48 = {propName:"Dichloroethane (1,1)", CAS:"00075-34-3", M_L:98.96, W_L:9.81, S:"", P_VA:2.863, A:7.097, B:1229.2, C:233.95, T_Min:-77, Tmax:135, N_BP:135};
	var petroChem49 = {propName:"Dichloroethane (1,2)", CAS:"00107-06-2", M_L:98.96, W_L:10.4, S:"", P_VA:0.961, A:7.46, B:1521.8, C:248.48, T_Min:-23, Tmax:211, N_BP:182};
	var petroChem50 = {propName:"Dichloroethylene (1,2) {1,2 dichloroethene}", CAS:"00540-59-0", M_L:96.94, W_L:10.76, S:"", P_VA:2.579, A:7.022, B:1205.4, C:230.6, T_Min:32, Tmax:183, N_BP:141};
	var petroChem51 = {propName:"Dichloroethylene (trans-1,2)", CAS:"00156-60-5", M_L:96.94, W_L:10.49, S:"", P_VA:4.333, A:6.965, B:1141.9, C:231.9, T_Min:-36, Tmax:185, N_BP:118};
	var petroChem52 = {propName:"Dichlorotoluene (3,4)", CAS:"00095-75-0", M_L:161.03, W_L:10.49, S:"", P_VA:0.0029, A:7.344, B:1882.5, C:215, T_Min:32, Tmax:221, N_BP:408};
	var petroChem53 = {propName:"Diethoxyethane (1,1)", CAS:"00105-57-7", M_L:118.17, W_L:6.89, S:"", P_VA:0.307, A:7.625, B:1574, C:229.47, T_Min:-10, Tmax:216, N_BP:212};
	var petroChem54 = {propName:"Diethoxymethane", CAS:"00462-95-3", M_L:104.15, W_L:6.94, S:"", P_VA:0.81, A:6.986, B:1270.2, C:221.26, T_Min:32, Tmax:167, N_BP:191};
	var petroChem55 = {propName:"Diethyl (n,n) aniline {N,N–diethylbenzenamine}", CAS:"00091-66-7", M_L:149.23, W_L:7.77, S:"", P_VA:0.0031, A:8.258, B:2652.8, C:277.32, T_Min:122, Tmax:425, N_BP:422};
	var petroChem56 = {propName:"Diethyl ketone {3-pentanone}", CAS:"00096-22-0", M_L:86.13, W_L:6.76, S:"", P_VA:0.423, A:5.741, B:716.2, C:147.17, T_Min:97, Tmax:215, N_BP:215};
	var petroChem57 = {propName:"Diethyl sulfide", CAS:"00352-93-2", M_L:90.19, W_L:6.98, S:"", P_VA:0.749, A:7.541, B:1560.5, C:246.59, T_Min:-39, Tmax:190, N_BP:197};
	var petroChem58 = {propName:"Diethylamine {N-ethyl ethanamine}", CAS:"00109-89-7", M_L:73.14, W_L:5.89, S:"", P_VA:2.712, A:5.737, B:559.1, C:140.18, T_Min:89, Tmax:141, N_BP:132};
	var petroChem59 = {propName:"Diethylbenzene (1,2)", CAS:"00135-01-3", M_L:134.22, W_L:7.34, S:"", P_VA:0.0094, A:6.99, B:1577.9, C:200.55, T_Min:206, Tmax:364, N_BP:361};
	var petroChem60 = {propName:"Diethylbenzene (1,3)", CAS:"00141-93-5", M_L:134.22, W_L:7.18, S:"", P_VA:0.01, A:7.006, B:1576.3, C:201, T_Min:203, Tmax:360, N_BP:358};
	var petroChem61 = {propName:"Diethylbenzene (1,4)", CAS:"00105-05-5", M_L:134.22, W_L:7.2, S:"", P_VA:0.01, A:7.001, B:1589.3, C:202.02, T_Min:206, Tmax:365, N_BP:363};
	var petroChem62 = {propName:"Di-isopropyl ether", CAS:"00108-20-3", M_L:102.17, W_L:6.04, S:"", P_VA:1.877, A:6.842, B:1135, C:218.23, T_Min:74, Tmax:153, N_BP:155};
	var petroChem63 = {propName:"Dimethoxyethane (1,2)", CAS:"00110-71-4", M_L:90.12, W_L:7.25, S:"", P_VA:0.966, A:6.713, B:1260.5, C:235.83, T_Min:-55, Tmax:199, N_BP:185};
	var petroChem64 = {propName:"Dimethyl formamide (n,n)", CAS:"00068-12-2", M_L:73.09, W_L:7.88, S:"", P_VA:0.04, A:6.806, B:1337.7, C:190.5, T_Min:86, Tmax:194, N_BP:307};
	var petroChem65 = {propName:"Dimethyl hydrazine (1,1)", CAS:"00057-14-7", M_L:60.1, W_L:6.6, S:"", P_VA:1.896, A:7.588, B:1388.5, C:232.54, T_Min:-32, Tmax:68, N_BP:146};
	var petroChem66 = {propName:"Dimethyl phthalate", CAS:"00131-11-3", M_L:194.18, W_L:9.94, S:"", P_VA:0.0000000225, A:4.522, B:700.3, C:51.42, T_Min:180, Tmax:304, N_BP:540};
	var petroChem67 = {propName:"Dimethylbutane (2,3)", CAS:"00079-29-8", M_L:86.18, W_L:5.52, S:"", P_VA:3.064, A:6.81, B:1127.2, C:228.95, T_Min:58, Tmax:138, N_BP:136};
	var petroChem68 = {propName:"Dimethylcyclopentane (1,1)", CAS:"01638-26-2", M_L:98.19, W_L:6.26, S:"", P_VA:0.932, A:6.83, B:1226.6, C:222.76, T_Min:60, Tmax:192, N_BP:190};
	var petroChem69 = {propName:"Dimethylpentane (2,2)", CAS:"00590-35-2", M_L:100.2, W_L:5.63, S:"", P_VA:1.315, A:6.815, B:1190.3, C:223.34, T_Min:60, Tmax:176, N_BP:174};
	var petroChem70 = {propName:"Dimethylpentane (2,3)", CAS:"00565-59-3", M_L:100.2, W_L:5.8, S:"", P_VA:0.842, A:6.862, B:1242.6, C:222.34, T_Min:64, Tmax:195, N_BP:194};
	var petroChem71 = {propName:"Dimethylpentane (2,4)", CAS:"00108-08-7", M_L:100.2, W_L:5.62, S:"", P_VA:1.221, A:6.836, B:1197.6, C:222.27, T_Min:57, Tmax:178, N_BP:177};
	var petroChem72 = {propName:"Dimethylpentane (3,3)", CAS:"00562-49-2", M_L:100.2, W_L:5.79, S:"", P_VA:1.029, A:6.831, B:1231, C:225.58, T_Min:56, Tmax:189, N_BP:187};
	var petroChem73 = {propName:"Dioxane (1,4)", CAS:"00123-91-1", M_L:88.11, W_L:8.63, S:"", P_VA:0.439, A:7.456, B:1570.1, C:241.85, T_Min:68, Tmax:221, N_BP:214};
	var petroChem74 = {propName:"Dipropyl ether {di-n-propyl ether}", CAS:"00111-43-3", M_L:102.17, W_L:6.23, S:"", P_VA:0.754, A:6.945, B:1254.8, C:218.82, T_Min:80, Tmax:192, N_BP:194};
	var petroChem75 = {propName:"Dodecane (n)", CAS:"00112-40-3", M_L:170.33, W_L:6.25, S:"", P_VA:0.00093, A:6.981, B:1625.9, C:180.31, T_Min:259, Tmax:423, N_BP:421};
	var petroChem76 = {propName:"Epichlorohydrin {chloromethyl oxirane}", CAS:"00106-89-8", M_L:92.52, W_L:9.85, S:"", P_VA:0.194, A:8.229, B:2086.8, C:273.16, T_Min:"", Tmax:"", N_BP:241};
	var petroChem77 = {propName:"Ethane", CAS:"00074-84-0", M_L:30.07, W_L:"", S:"", P_VA:472, A:6.813, B:659.7, C:256.431, T_Min:-215, Tmax:-100, N_BP:-127};
	var petroChem78 = {propName:"Ethanolamine (mono)", CAS:"00141-43-5", M_L:61.08, W_L:8.5, S:"", P_VA:0.002, A:7.168, B:1408.9, C:157.06, T_Min:150, Tmax:340, N_BP:339};
	var petroChem79 = {propName:"Ethyl acetate", CAS:"00141-78-6", M_L:88.11, W_L:7.51, S:"", P_VA:1.135, A:7.103, B:1245.7, C:217.96, T_Min:60, Tmax:168, N_BP:171};
	var petroChem80 = {propName:"Ethyl acrylate {ethyl ester 2-propenoic acid}", CAS:"00140-88-5", M_L:100.12, W_L:7.71, S:"", P_VA:0.445, A:7.15, B:1366.1, C:220.47, T_Min:-21, Tmax:211, N_BP:211};
	var petroChem81 = {propName:"Ethyl alcohol {ethanol}", CAS:"00064-17-5", M_L:46.07, W_L:6.59, S:"", P_VA:0.648, A:8.247, B:1670.4, C:232.96, T_Min:32, Tmax:173, N_BP:173};
	var petroChem82 = {propName:"Ethyl chloride", CAS:"00075-00-3", M_L:64.51, W_L:7.43, S:"", P_VA:16.63, A:7.037, B:1052.8, C:241.07, T_Min:-69, Tmax:55, N_BP:61};
	var petroChem83 = {propName:"Ethyl ether {diethyl ether}", CAS:"00060-29-7", M_L:74.12, W_L:5.96, S:"", P_VA:6.675, A:6.897, B:1062.6, C:228.22, T_Min:-10, Tmax:132, N_BP:94};
	var petroChem84 = {propName:"Ethylamine", CAS:"00075-04-7", M_L:45.08, W_L:5.65, S:"", P_VA:14.08, A:7.405, B:1203.8, C:249.43, T_Min:62, Tmax:349, N_BP:64};
	var petroChem85 = {propName:"Ethylbenzene", CAS:"00100-41-4", M_L:106.17, W_L:7.24, S:"", P_VA:0.104, A:6.95, B:1419.3, C:212.61, T_Min:134, Tmax:279, N_BP:277};
	var petroChem86 = {propName:"Ethylcyclopentane", CAS:"01640-89-7", M_L:98.19, W_L:6.4, S:"", P_VA:0.475, A:6.898, B:1305, C:221.4, T_Min:84, Tmax:220, N_BP:218};
	var petroChem87 = {propName:"Ethylene {ethene}", CAS:"00074-85-1", M_L:28.05, W_L:4.74, S:"", P_VA:749, A:6.748, B:584.1, C:254.84, T_Min:-191, Tmax:-120, N_BP:-155};
	var petroChem88 = {propName:"Ethyleneoxide", CAS:"00075-21-8", M_L:44.05, W_L:7.365, S:"", P_VA:17.84, A:8.722, B:2022.8, C:335.81, T_Min:32, Tmax:89, N_BP:53};
	var petroChem89 = {propName:"Ethylpentane (3)", CAS:"00617-78-7", M_L:100.2, W_L:5.83, S:"", P_VA:0.701, A:6.88, B:1254.1, C:220.15, T_Min:70, Tmax:202, N_BP:200};
	var petroChem90 = {propName:"Fluoranthene", CAS:"00206-44-0", M_L:202.25, W_L:10.45, S:"", P_VA:0.0000000396, A:12.836, B:5348.1, C:273.15, T_Min:77, Tmax:230, N_BP:723};
	var petroChem91 = {propName:"Fluorobenzene", CAS:"00462-06-6", M_L:96.1, W_L:8.53, S:"", P_VA:0.936, A:7.237, B:1409.8, C:238.36, T_Min:0, Tmax:183, N_BP:185};
	var petroChem92 = {propName:"Formic acid", CAS:"00064-18-6", M_L:46.03, W_L:10.18, S:"", P_VA:0.516, A:4.876, B:515, C:133.74, T_Min:33, Tmax:93, N_BP:213};
	var petroChem93 = {propName:"Freon 11 {trichlorofluoromethane}", CAS:"00075-69-4", M_L:137.37, W_L:12.48, S:"", P_VA:10.93, A:6.884, B:1043, C:236.88, T_Min:"", Tmax:"", N_BP:75};
	var petroChem94 = {propName:"Furan", CAS:"00110-00-9", M_L:68.07, W_L:7.94, S:"", P_VA:7.963, A:6.975, B:1060.8, C:227.73, T_Min:37, Tmax:143, N_BP:89};
	var petroChem95 = {propName:"Furfural {2-furancarboxaldehyde}", CAS:"00098-01-1", M_L:96.09, W_L:9.68, S:"", P_VA:0.018, A:6.969, B:1430.1, C:188.7, T_Min:133, Tmax:321, N_BP:323};
	var petroChem96 = {propName:"Heneicosane (n)", CAS:"00629-94-7", M_L:296.57, W_L:6.61, S:"", P_VA:0.000000623, A:8.796, B:3571.2, C:253.2, T_Min:307, Tmax:663, N_BP:679};
	var petroChem97 = {propName:"Heptane (n)", CAS:"00142-82-5", M_L:100.2, W_L:5.71, S:"", P_VA:0.541, A:6.903, B:1268.6, C:216.95, T_Min:79, Tmax:211, N_BP:209};
	var petroChem98 = {propName:"Heptene (1)", CAS:"00592-76-7", M_L:98.19, W_L:5.82, S:"", P_VA:0.752, A:7.093, B:1400.7, C:238.96, T_Min:32, Tmax:192, N_BP:201};
	var petroChem99 = {propName:"Hexadiene (1,5)", CAS:"00592-42-7", M_L:82.14, W_L:5.74, S:"", P_VA:2.89, A:6.563, B:1008.1, C:214.16, T_Min:32, Tmax:138, N_BP:140};
	var petroChem100 = {propName:"Hexane (n)", CAS:"00110-54-3", M_L:86.18, W_L:5.47, S:"", P_VA:1.913, A:6.878, B:1171.5, C:224.37, T_Min:55, Tmax:157, N_BP:156};
	var petroChem101 = {propName:"Hexanol (1)", CAS:"00111-27-3", M_L:102.17, W_L:6.79, S:"", P_VA:0.005, A:7.288, B:1422, C:165.44, T_Min:126, Tmax:315, N_BP:314};
	var petroChem102 = {propName:"Hexene (1)", CAS:"00592-41-6", M_L:84.16, W_L:5.62, S:"", P_VA:2.378, A:6.866, B:1153, C:225.85, T_Min:61, Tmax:148, N_BP:147};
	var petroChem103 = {propName:"Hydrogen cyanide {hydrocyanic acid}", CAS:"00074-90-8", M_L:27.03, W_L:5.74, S:"", P_VA:9.931, A:7.549, B:1340.8, C:261.56, T_Min:2, Tmax:115, N_BP:79};
	var petroChem104 = {propName:"Isobutane {methylpropane (2)}", CAS:"00075-28-5", M_L:58.12, W_L:4.6, S:"", P_VA:38.22, A:6.819, B:912.1, C:243.34, T_Min:-121, Tmax:11, N_BP:12};
	var petroChem105 = {propName:"Isobutene {methylpropene (2)}", CAS:"00115-11-7", M_L:56.11, W_L:4.92, S:"", P_VA:32.18, A:6.522, B:799.1, C:226.54, T_Min:-70, Tmax:32, N_BP:20};
	var petroChem106 = {propName:"Isobutyl alcohol {2-methyl 1-propanol}", CAS:"00078-83-1", M_L:74.12, W_L:6.69, S:"", P_VA:0.096, A:7.306, B:1237, C:171.62, T_Min:176, Tmax:240, N_BP:226};
	var petroChem107 = {propName:"Isooctane {2,2,4-trimethylpentane}", CAS:"00540-84-1", M_L:114.23, W_L:5.74, S:"", P_VA:0.596, A:6.812, B:1257.8, C:220.74, T_Min:76, Tmax:212, N_BP:211};
	var petroChem108 = {propName:"Isopentane {2-methyl butane}", CAS:"00078-78-4", M_L:72.15, W_L:5.18, S:"", P_VA:9.426, A:6.79, B:1020, C:233.1, T_Min:61, Tmax:83, N_BP:82};
	var petroChem109 = {propName:"Isopentene {2-methyl 2-butene}", CAS:"00513-35-9", M_L:70.13, W_L:5.53, S:"", P_VA:6.21, A:6.922, B:1098.6, C:233.26, T_Min:37, Tmax:159, N_BP:100};
	var petroChem110 = {propName:"Isoprene {2-methyl 1,3-butadiene}", CAS:"00078-79-5", M_L:68.12, W_L:5.67, S:"", P_VA:7.446, A:6.091, B:706.9, C:186.1, T_Min:62, Tmax:93, N_BP:93};
	var petroChem111 = {propName:"Isopropyl alcohol {isopropanol}", CAS:"00067-63-0", M_L:60.1, W_L:6.52, S:"", P_VA:0.443, A:7.736, B:1357.4, C:197.34, T_Min:134, Tmax:193, N_BP:180};
	var petroChem112 = {propName:"Isopropyl benzene {cumene}", CAS:"00098-82-8", M_L:120.19, W_L:7.19, S:"", P_VA:0.048, A:6.929, B:1455.8, C:207.2, T_Min:158, Tmax:308, N_BP:305};
	var petroChem113 = {propName:"Isopropylbenzene (1-methyl-2)", CAS:"00527-84-4", M_L:134.22, W_L:7.32, S:"", P_VA:0.017, A:7.417, B:1880.5, C:236.27, T_Min:178, Tmax:355, N_BP:350};
	var petroChem114 = {propName:"Methacrylonitrile {2-methyl 2-propenenitrile}", CAS:"00126-98-7", M_L:67.09, W_L:6.68, S:"", P_VA:0.886, A:6.999, B:1353.6, C:238.03, T_Min:-48, Tmax:194, N_BP:194};
	var petroChem115 = {propName:"Methane", CAS:"00074-82-8", M_L:16.04, W_L:3.53, S:"", P_VA:4567, A:7.096, B:516.7, C:284.37, T_Min:-262, Tmax:-117, N_BP:-260};
	var petroChem116 = {propName:"Methyl acetate {methyl ester acetic acid}", CAS:"00079-20-9", M_L:74.08, W_L:7.8, S:"", P_VA:2.703, A:7.079, B:1164.4, C:220.46, T_Min:35, Tmax:133, N_BP:134};
	var petroChem117 = {propName:"Methyl acrylate {methyl ester 2-propenoic acid}", CAS:"00096-33-3", M_L:86.09, W_L:7.96, S:"", P_VA:1.058, A:7.198, B:1338.7, C:229.63, T_Min:-47, Tmax:176, N_BP:177};
	var petroChem118 = {propName:"Methyl alcohol {methanol}", CAS:"00067-56-1", M_L:32.04, W_L:6.61, S:"", P_VA:1.476, A:8.079, B:1581.3, C:239.65, T_Min:59, Tmax:183, N_BP:148};
	var petroChem119 = {propName:"Methyl ethyl ketone {2-butanone}", CAS:"00078-93-3", M_L:72.11, W_L:6.68, S:"", P_VA:1.081, A:6.864, B:1150.2, C:209.25, T_Min:106, Tmax:207, N_BP:176};
	var petroChem120 = {propName:"Methyl isobutyl ketone", CAS:"00108-10-1", M_L:100.16, W_L:6.65, S:"", P_VA:0.219, A:6.828, B:1254.1, C:201.61, T_Min:71, Tmax:241, N_BP:241};
	var petroChem121 = {propName:"Methyl methacrylate", CAS:"00080-62-6", M_L:100.12, W_L:7.88, S:"", P_VA:0.416, A:8.253, B:1945.6, C:265.58, T_Min:102, Tmax:192, N_BP:213};
	var petroChem122 = {propName:"Methyl propyl ether", CAS:"00557-17-5", M_L:74.12, W_L:6.14, S:"", P_VA:6.017, A:6.563, B:903.6, C:206.46, T_Min:31, Tmax:103, N_BP:102};
	var petroChem123 = {propName:"Methyl styrene (alpha)", CAS:"00098-83-9", M_L:118.18, W_L:7.6, S:"", P_VA:0.024, A:6.924, B:1486.9, C:202.4, T_Min:"", Tmax:"", N_BP:329};
	var petroChem124 = {propName:"Methylcyclohexane", CAS:"00108-87-2", M_L:98.19, W_L:6.42, S:"", P_VA:0.558, A:6.823, B:1270.8, C:221.42, T_Min:27, Tmax:261, N_BP:214};
	var petroChem125 = {propName:"Methylcyclopentane", CAS:"00096-37-7", M_L:84.16, W_L:6.25, S:"", P_VA:1.738, A:6.863, B:1186.1, C:226.04, T_Min:59, Tmax:163, N_BP:161};
	var petroChem126 = {propName:"Methyldichlorosilane", CAS:"20156-50-7", M_L:115.03, W_L:8.91, S:"", P_VA:5.718, A:7.028, B:1167.8, C:240.7, T_Min:34, Tmax:106, N_BP:""};
	var petroChem127 = {propName:"Methylene chloride", CAS:"00075-09-2", M_L:84.93, W_L:11.07, S:"", P_VA:5.64, A:7.412, B:1327, C:252.68, T_Min:-40, Tmax:104, N_BP:104};
	var petroChem128 = {propName:"Methylhexane (2)", CAS:"00591-76-4", M_L:100.2, W_L:5.66, S:"", P_VA:0.799, A:6.882, B:1240.9, C:220.1, T_Min:65, Tmax:196, N_BP:194};
	var petroChem129 = {propName:"Methylhexane (3)", CAS:"00589-34-4", M_L:100.2, W_L:5.72, S:"", P_VA:0.744, A:6.874, B:1243.8, C:219.63, T_Min:68, Tmax:199, N_BP:197};
	var petroChem130 = {propName:"Methylpentane (2)", CAS:"00107-83-5", M_L:86.18, W_L:5.43, S:"", P_VA:2.73, A:6.839, B:1135.4, C:226.57, T_Min:55, Tmax:142, N_BP:142};
	var petroChem131 = {propName:"Methyl-tert-butyl ether {MTBE}", CAS:"01634-04-4", M_L:88.15, W_L:6.18, S:"", P_VA:3.226, A:6.867, B:1116.1, C:224.74, T_Min:125, Tmax:431, N_BP:131};
	var petroChem132 = {propName:"Morpholine", CAS:"00110-91-8", M_L:87.12, W_L:8.35, S:"", P_VA:0.109, A:7.718, B:1745.8, C:235, T_Min:32, Tmax:111, N_BP:263};
	var petroChem133 = {propName:"Naphthalene", CAS:"00091-20-3", M_L:128.17, W_L:8.56, S:"", P_VA:0.0024, A:7.146, B:1831.6, C:211.82, T_Min:177, Tmax:354, N_BP:422};
	var petroChem134 = {propName:"Nitrobenzene", CAS:"00098-95-3", M_L:123.11, W_L:10.05, S:"", P_VA:0.0022, A:7.091, B:1727.6, C:199.71, T_Min:273, Tmax:411, N_BP:412};
	var petroChem135 = {propName:"Nitromethane", CAS:"00075-52-5", M_L:61.04, W_L:9.49, S:"", P_VA:0.415, A:7.281, B:1446.2, C:227.52, T_Min:132, Tmax:277, N_BP:214};
	var petroChem136 = {propName:"Nonadecane (n)", CAS:"00629-92-5", M_L:268.52, W_L:6.56, S:"", P_VA:0.000000364, A:33.303, B:28197, C:725.94, T_Min:91, Tmax:131, N_BP:624};
	var petroChem137 = {propName:"Nonane (n)", CAS:"00111-84-2", M_L:128.26, W_L:5.99, S:"", P_VA:0.037, A:6.7, B:1492.9, C:217.26, T_Min:-64, Tmax:94, N_BP:303};
	var petroChem138 = {propName:"Octadecane (n)", CAS:"00593-45-3", M_L:254.49, W_L:6.48, S:"", P_VA:0.000000616, A:7.207, B:2069, C:161.22, T_Min:346, Tmax:602, N_BP:592};
	var petroChem139 = {propName:"Octane (n)", CAS:"00111-65-9", M_L:114.23, W_L:5.83,S:"",  P_VA:0.142, A:8.076, B:1936.3, C:253.01, T_Min:-70, Tmax:75, N_BP:258};
	var petroChem140 = {propName:"Octanol (1)", CAS:"00111-87-5", M_L:130.23, W_L:6.9, S:"", P_VA:0.00061, A:9.352, B:2603.4, C:224.35, T_Min:68, Tmax:176, N_BP:383};
	var petroChem141 = {propName:"Octene (1)", CAS:"00111-66-0", M_L:112.21, W_L:5.97, S:"", P_VA:0.196, A:6.933, B:1353.5, C:212.76, T_Min:113, Tmax:252, N_BP:251};
	var petroChem142 = {propName:"Pentachloroethane", CAS:"00076-01-7", M_L:202.29, W_L:14.02, S:"", P_VA:0.04, A:6.643, B:1342.3, C:196.51, T_Min:77, Tmax:324, N_BP:324};
	var petroChem143 = {propName:"Pentadiene (1,2)", CAS:"00591-95-7", M_L:68.12, W_L:5.78, S:"", P_VA:4.718, A:6.936, B:1125.5, C:231.88, T_Min:-76, Tmax:-19, N_BP:113};
	var petroChem144 = {propName:"Pentadiene (1,4)", CAS:"00591-93-5", M_L:68.12, W_L:5.52, S:"", P_VA:10.06, A:7.035, B:1108.2, C:241.05, T_Min:-110, Tmax:65, N_BP:79};
	var petroChem145 = {propName:"Pentadiene (2,3)", CAS:"00591-96-8", M_L:68.12, W_L:5.8, S:"", P_VA:4.223, A:7.263, B:1256.2, C:239.57, T_Min:-76, Tmax:-15, N_BP:119};
	var petroChem146 = {propName:"Pentane (n)", CAS:"00109-66-0", M_L:72.15, W_L:5.23, S:"", P_VA:6.884, A:6.864, B:1070.6, C:232.7, T_Min:24, Tmax:155, N_BP:97};
	var petroChem147 = {propName:"Pentene (1)", CAS:"00109-67-1", M_L:70.13, W_L:5.35, S:"", P_VA:8.671, A:6.786, B:1014.3, C:229.78, T_Min:55, Tmax:87, N_BP:88};
	var petroChem148 = {propName:"Pentyne (1)", CAS:"00627-19-0", M_L:68.12, W_L:5.76, S:"", P_VA:5.657, A:6.967, B:1092.5, C:227.18, T_Min:-47, Tmax:142, N_BP:104};
	var petroChem149 = {propName:"Phenanthrene", CAS:"00085-01-8", M_L:178.23, W_L:8.18, S:"", P_VA:0.00000337, A:7.394, B:2428.5, C:202.19, T_Min:212, Tmax:302, N_BP:635};
	var petroChem150 = {propName:"Phenol", CAS:"00108-95-2", M_L:94.11, W_L:8.8, S:"", P_VA:0.003, A:7.122, B:1509.7, C:174.2, T_Min:225, Tmax:359, N_BP:359};
	var petroChem151 = {propName:"Phosgene", CAS:"00075-44-5", M_L:98.92, W_L:11.45, S:"", P_VA:19.43, A:7.146, B:1072.7, C:243.3, T_Min:47, Tmax:345, N_BP:46};
	var petroChem152 = {propName:"Picoline (3) {3-methyl pyridine}", CAS:"00108-99-6", M_L:93.13, W_L:7.98, S:"", P_VA:0.064, A:7.054, B:1484.3, C:211.54, T_Min:165, Tmax:364, N_BP:291};
	var petroChem153 = {propName:"Propane", CAS:"00074-98-6", M_L:44.1, W_L:4.12, S:"", P_VA:111, A:6.858, B:819.3, C:248.73, T_Min:-45, Tmax:117, N_BP:-44};
	var petroChem154 = {propName:"Propanethiol (1)", CAS:"00107-03-9", M_L:76.16, W_L:7.02, S:"", P_VA:1.943, A:6.929, B:1183.4, C:224.63, T_Min:76, Tmax:216, N_BP:154};
	var petroChem155 = {propName:"Propanethiol (2)", CAS:"00075-33-2", M_L:76.16, W_L:6.8, S:"", P_VA:3.59, A:6.877, B:1113.9, C:226.16, T_Min:51, Tmax:186, N_BP:131};
	var petroChem156 = {propName:"Propyl alcohol (n) {propanol (1)}", CAS:"00071-23-8", M_L:60.1, W_L:6.67, S:"", P_VA:0.218, A:8.189, B:1690.9, C:221.35, T_Min:67, Tmax:207, N_BP:207};
	var petroChem157 = {propName:"Propyl nitrate (n) {propyl ester nitric acid}", CAS:"00627-13-4", M_L:105.09, W_L:8.8, S:"", P_VA:0.261, A:6.955, B:1294.4, C:206.7, T_Min:32, Tmax:158, N_BP:231};
	var petroChem158 = {propName:"Propylamine (n) {1-propanamine}", CAS:"00107-10-8", M_L:59.11, W_L:5.99, S:"", P_VA:3.99, A:6.926, B:1044, C:210.84, T_Min:73, Tmax:172, N_BP:120};
	var petroChem159 = {propName:"Propylene {propene}", CAS:"00115-07-1", M_L:42.08, W_L:4.22, S:"", P_VA:132, A:6.85, B:795.8, C:248.27, T_Min:-161, Tmax:-53, N_BP:-54};
	var petroChem160 = {propName:"Propylene glycol (1,2) {1,2 propanediol}", CAS:"00057-55-6", M_L:76.09, W_L:8.65, S:"", P_VA:0.00094, A:8.208, B:2085.9, C:203.54, T_Min:"", Tmax:"", N_BP:368};
	var petroChem161 = {propName:"Propylene oxide", CAS:"00075-56-9", M_L:58.08, W_L:7.17, S:"", P_VA:7.101, A:6.97, B:1065.3, C:226.28, T_Min:-100, Tmax:94, N_BP:95};
	var petroChem162 = {propName:"Pyridine", CAS:"00110-86-1", M_L:79.1, W_L:8.2, S:"", P_VA:0.233, A:7.038, B:1371.4, C:214.65, T_Min:153, Tmax:307, N_BP:240};
	var petroChem163 = {propName:"Resorcinol", CAS:"00108-46-3", M_L:110.11, W_L:10.61, S:"", P_VA:0.00000665, A:8.398, B:2687.2, C:210.99, T_Min:305, Tmax:530, N_BP:532};
	var petroChem164 = {propName:"Styrene", CAS:"00100-42-5", M_L:104.15, W_L:7.56, S:"", P_VA:0.066, A:7.095, B:1525.1, C:216.77, T_Min:86, Tmax:293, N_BP:295};
	var petroChem165 = {propName:"Tetrachloroethane (1,1,1,2)", CAS:"00630-20-6", M_L:167.85, W_L:12.86, S:"", P_VA:0.133, A:6.906, B:1370.4, C:210.25, T_Min:139, Tmax:266, N_BP:271};
	var petroChem166 = {propName:"Tetrachloroethane (1,1,2,2)", CAS:"00079-34-5", M_L:167.85, W_L:13.32, S:"", P_VA:0.037, A:6.091, B:959.6, C:149.78, T_Min:77, Tmax:266, N_BP:295};
	var petroChem167 = {propName:"Tetrachloroethylene", CAS:"00127-18-4", M_L:165.83, W_L:13.54, S:"", P_VA:0.213, A:7.056, B:1440.8, C:223.98, T_Min:82, Tmax:226, N_BP:250};
	var petroChem168 = {propName:"Tetrahydrofuran", CAS:"00109-99-9", M_L:72.11, W_L:7.42, S:"", P_VA:2.039, A:6.996, B:1202.9, C:226.33, T_Min:74, Tmax:211, N_BP:151};
	var petroChem169 = {propName:"Toluene", CAS:"00108-88-3", M_L:92.14, W_L:7.24, S:"", P_VA:0.331, A:7.017, B:1377.6, C:222.64, T_Min:32, Tmax:122, N_BP:231};
	var petroChem170 = {propName:"Trichloroethane (1,1,1)", CAS:"00071-55-6", M_L:133.4, W_L:11.18, S:"", P_VA:1.65, A:8.761, B:2210.2, C:308.05, T_Min:22, Tmax:62, N_BP:165};
	var petroChem171 = {propName:"Trichloroethane (1,1,2)", CAS:"00079-00-5", M_L:133.4, W_L:12.02, S:"", P_VA:0.245, A:6.945, B:1310.3, C:208.74, T_Min:122, Tmax:237, N_BP:237};
	var petroChem172 = {propName:"Trichloroethylene", CAS:"00079-01-6", M_L:131.39, W_L:12.22, S:"", P_VA:0.817, A:6.429, B:974.5, C:187.34, T_Min:64, Tmax:188, N_BP:189};
	var petroChem173 = {propName:"Trichloropropane (1,2,3)", CAS:"00096-18-4", M_L:147.43, W_L:11.59, S:"", P_VA:0.031, A:7.532, B:1818.9, C:232.52, T_Min:48, Tmax:316, N_BP:313};
	var petroChem174 = {propName:"Tridecane (n)", CAS:"00629-50-5", M_L:184.36, W_L:6.31, S:"", P_VA:0.000246, A:7.003, B:1689.1, C:174.28, T_Min:283, Tmax:457, N_BP:453};
	var petroChem175 = {propName:"Trifluoroethane (1,1,2-trichloro-1,2,2)", CAS:"00076-13-1", M_L:187.37, W_L:13.05, S:"", P_VA:4.376, A:6.88, B:1099.9, C:227.5, T_Min:-13, Tmax:181, N_BP:118};
	var petroChem176 = {propName:"Trimethylbenzene (1,2,4)", CAS:"00095-63-6", M_L:120.19, W_L:7.31, S:"", P_VA:0.02, A:7.044, B:1573.3, C:208.56, T_Min:126, Tmax:388, N_BP:337};
	var petroChem177 = {propName:"Trimethylchlorosilane {chlorotrimethylsilane}", CAS:"00075-77-4", M_L:108.64, W_L:7.15, S:"", P_VA:3.068, A:6.951, B:1191, C:235.15, T_Min:37, Tmax:132, N_BP:136};
	var petroChem178 = {propName:"Trimethylpentane (2,2,3)", CAS:"00564-02-3", M_L:114.23, W_L:5.74, S:"", P_VA:0.378, A:6.825, B:1294.9, C:218.42, T_Min:"", Tmax:"", N_BP:230};
	var petroChem179 = {propName:"Trimethylpentane (2,3,3)", CAS:"00560-21-4", M_L:114.23, W_L:6.06, S:"", P_VA:0.317, A:6.844, B:1328.1, C:220.38, T_Min:"", Tmax:"", N_BP:238};
	var petroChem180 = {propName:"Trimethylpentane (2,3,4)", CAS:"00565-75-3", M_L:114.23, W_L:6, S:"", P_VA:0.314, A:7.031, B:1420.7, C:228.53, T_Min:-59, Tmax:308, N_BP:237};
	var petroChem181 = {propName:"Undecane (n)", CAS:"01120-21-4", M_L:156.31, W_L:6.18, S:"", P_VA:0.0035, A:6.977, B:1572.5, C:188.02, T_Min:220, Tmax:387, N_BP:383};
	var petroChem182 = {propName:"Vinyl acetate {acetic acid ethenyl ester}", CAS:"00108-05-4", M_L:86.09, W_L:7.78, S:"", P_VA:1.396, A:7.215, B:1299.1, C:226.97, T_Min:71, Tmax:162, N_BP:163};
	var petroChem183 = {propName:"Vinylidene chloride {1,1-dichloro ethene}", CAS:"00075-35-4", M_L:96.94, W_L:10.13, S:"", P_VA:8.096, A:6.983, B:1104.7, C:237.75, T_Min:-19, Tmax:90, N_BP:88};
	var petroChem184 = {propName:"Xylene (m) {1,3-dimethyl benzene}", CAS:"00108-38-3", M_L:106.17, W_L:7.21, S:"", P_VA:0.09, A:7.009, B:1462.3, C:215.11, T_Min:82, Tmax:331, N_BP:283};
	var petroChem185 = {propName:"Xylene (o) {1,2-dimethyl benzene}", CAS:"00095-47-6", M_L:106.17, W_L:7.35, S:"", P_VA:0.071, A:6.999, B:1474.7, C:213.69, T_Min:90, Tmax:342, N_BP:291};
	var petroChem186 = {propName:"Xylene (p) {1,4-dimethyl benzene}", CAS:"00106-42-3", M_L:106.17, W_L:7.19, S:"", P_VA:0.097, A:7.021, B:1474.4, C:217.77, T_Min:56, Tmax:355, N_BP:281};

	// put petroChem objects into array
	var aryPetroChemProp = [petroChem1, petroChem2, petroChem3, petroChem4, petroChem5, petroChem6, petroChem7, petroChem8, petroChem9, petroChem10, petroChem11, petroChem12, petroChem13, petroChem14, petroChem15, petroChem16, petroChem17, petroChem18, petroChem19, petroChem20, petroChem21, petroChem22, petroChem23, petroChem24, petroChem25, petroChem26, petroChem27, petroChem28, petroChem29, petroChem30, petroChem31, petroChem32, petroChem33, petroChem34, petroChem35, petroChem36, petroChem37, petroChem38, petroChem39, petroChem40, petroChem41, petroChem42, petroChem43, petroChem44, petroChem45, petroChem46, petroChem47, petroChem48, petroChem49, petroChem50, petroChem51, petroChem52, petroChem53, petroChem54, petroChem55, petroChem56, petroChem57, petroChem58, petroChem59, petroChem60, petroChem61, petroChem62, petroChem63, petroChem64, petroChem65, petroChem66, petroChem67, petroChem68, petroChem69, petroChem70, petroChem71, petroChem72, petroChem73, petroChem74, petroChem75, petroChem76, petroChem77, petroChem78, petroChem79, petroChem80, petroChem81, petroChem82, petroChem83, petroChem84, petroChem85, petroChem86, petroChem87, petroChem88, petroChem89, petroChem90, petroChem91, petroChem92, petroChem93, petroChem94, petroChem95, petroChem96, petroChem97, petroChem98, petroChem99, petroChem100, petroChem101, petroChem102, petroChem103, petroChem104, petroChem105, petroChem106, petroChem107, petroChem108, petroChem109, petroChem110, petroChem111, petroChem112, petroChem113, petroChem114, petroChem115, petroChem116, petroChem117, petroChem118, petroChem119, petroChem120, petroChem121, petroChem122, petroChem123, petroChem124, petroChem125, petroChem126, petroChem127, petroChem128, petroChem129, petroChem130, petroChem131, petroChem132, petroChem133, petroChem134, petroChem135, petroChem136, petroChem137, petroChem138, petroChem139, petroChem140, petroChem141, petroChem142, petroChem143, petroChem144, petroChem145, petroChem146, petroChem147, petroChem148, petroChem149, petroChem150, petroChem151, petroChem152, petroChem153, petroChem154, petroChem155, petroChem156, petroChem157, petroChem158, petroChem159, petroChem160, petroChem161, petroChem162, petroChem163, petroChem164, petroChem165, petroChem166, petroChem167, petroChem168, petroChem169, petroChem170, petroChem171, petroChem172, petroChem173, petroChem174, petroChem175, petroChem176, petroChem177, petroChem178, petroChem179, petroChem180, petroChem181, petroChem182, petroChem183, petroChem184, petroChem185, petroChem186];
	
	return aryPetroChemProp;
}

function fillPetroChemProperties() {
	//declare variables:
	var i, lenAry, text, aryPetroChemProp;
	aryPetroChemProp = PetroChemProperties();
	//put names into dropdown box
	lenAry = aryPetroChemProp.length;
	var select = document.getElementById("tankContents");
	for(var i = 0; i < lenAry; i++)
	{
		var option = document.createElement("OPTION"),
			txt1 = document.createTextNode(aryPetroChemProp[i].propName);
		option.appendChild(txt1);
		option.setAttribute("value",aryPetroChemProp[i].propName);
		select.insertBefore(option,tankContents.lastChild);
	}
}

//Table 7.1-4: Skipped because it contains equations

//Table 7.1-5: Skipped until needed

//Table 7.1-6: Paint Solar Absorptance

function PaintProperties() {
	//declare objects:
	var paint1 = {paintName:"White", New:0.17, Average:0.25, Aged:0.34};
	var paint2 = {paintName:"Aluminum: Specular", New:0.39, Average:0.44, Aged:0.49};
	var paint3 = {paintName:"Aluminum: Diffuse", New:0.6, Average:0.64, Aged:0.68};
	var paint4 = {paintName:"Beige/Cream", New:0.35, Average:0.42, Aged:0.49};
	var paint5 = {paintName:"Black", New:0.97, Average:0.97, Aged:0.97};
	var paint6 = {paintName:"Brown", New:0.58, Average:0.62, Aged:0.67};
	var paint7 = {paintName:"Gray: Light", New:0.54, Average:0.58, Aged:0.63};
	var paint8 = {paintName:"Gray: Medium", New:0.68, Average:0.71, Aged:0.74};
	var paint9 = {paintName:"Gray: Dark", New:0.89, Average:0.9, Aged:0.91};
	var paint10 = {paintName:"Red: Primer", New:0.89, Average:0.9, Aged:0.91};
	var paint11 = {paintName:"Rust: red iron oxide", New:0.38, Average:0.44, Aged:0.5};
	var paint12 = {paintName:"Tan", New:0.43, Average:0.49, Aged:0.55};
	var paint13 = {paintName:"Aluminum: mill finish, unpainted", New:0.1, Average:0.12, Aged:0.15};
	//put paint objects into array
	var aryPaintProp = [paint1, paint2, paint3, paint4, paint5, paint6, paint7, paint8, paint9, paint10, paint11, paint12, paint13];	
	
	return aryPaintProp;
}

function fillPaintProperties (source) {
	//declare variables:
	var i, lenAry, text, aryPaintProp;
	//put names into dropdown box "paint"
	aryPaintProp = PaintProperties();
	
	lenAry = aryPaintProp.length;
	var select1 = document.getElementById(source);
	
	for(var i = 0; i < lenAry; i++)
	{
		var option = document.createElement("OPTION"),
			txt1 = document.createTextNode(aryPaintProp[i].paintName);
		option.appendChild(txt1);
		option.setAttribute("value",aryPaintProp[i].paintName);
		select1.insertBefore(option,source.lastChild);
	}
	
}
