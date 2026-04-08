export type LinkItem = {
	href: string;
	label: string;
};

export type FaqItem = {
	question: string;
	answer: string;
};

export type PageEntry = {
	slug: string;
	pathname: string;
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	intro: string;
	keywords: string[];
	primaryPoints: string[];
	secondaryPoints: string[];
	ctaLinks: LinkItem[];
	relatedLinks: LinkItem[];
	faqs: FaqItem[];
};

const bogotaKeywords = ['Bogota', 'Fontibon', 'Colombia'];

export const odontologiaLanding: PageEntry = {
	slug: 'odontologia',
	pathname: '/odontologia/',
	title: 'Odontologia',
	description:
		'Servicios odontologicos de MB Aire y Succion en Bogota, Fontibon: compresores dentales, bombas de succion y mantenimiento de equipos odontologicos.',
	eyebrow: 'Silo odontologico',
	h1: 'Servicios odontologicos en Bogota para compresores, succion y mantenimiento tecnico',
	intro:
		'La linea odontologica de MB Aire y Succion integra venta de equipos, mantenimiento tecnico y soluciones de succion a la medida para consultorios y clinicas.',
	keywords: [
		'odontologia',
		'servicio tecnico odontologico',
		'compresores dentales',
		'bombas de succion dental',
		'mantenimiento equipos odontologicos',
		...bogotaKeywords,
	],
	primaryPoints: [
		'Compresores dentales de diferentes marcas y capacidades.',
		'Bombas de succion de alta segun la necesidad operativa del consultorio.',
		'Mantenimiento de equipos odontologicos con enfoque clinico y preventivo.',
	],
	secondaryPoints: [
		'Sistemas de succion especializados y fabricados a la medida.',
		'Venta de sillas odontologicas y equipos medicos generales.',
		'Diagnosticos tecnicos orientados a continuidad y rendimiento.',
	],
	ctaLinks: [
		{ href: '/odontologia/compresores-dentales/', label: 'Compresores dentales' },
		{ href: '/odontologia/bombas-de-succion/', label: 'Bombas de succion' },
		{ href: '/odontologia/mantenimiento-equipos-odontologicos/', label: 'Mantenimiento odontologico' },
	],
	relatedLinks: [
		{ href: '/bogota/compresores-dentales/', label: 'Compresores dentales en Bogota' },
		{ href: '/bogota/bombas-de-succion/', label: 'Bombas de succion en Bogota' },
		{ href: '/bogota/mantenimiento-odontologico/', label: 'Mantenimiento odontologico en Bogota' },
	],
	faqs: [
		{
			question: 'Que incluye el area odontologica?',
			answer:
				'Incluye compresores dentales, bombas de succion, mantenimiento tecnico de equipos odontologicos y soluciones de succion personalizadas.',
		},
		{
			question: 'Atienden clinicas y consultorios en Bogota?',
			answer:
				'Si. MB Aire y Succion trabaja desde Bogota, Fontibon, para atender necesidades tecnicas del sector odontologico.',
		},
	],
};

export const odontologiaServices: PageEntry[] = [
	{
		slug: 'compresores-dentales',
		pathname: '/odontologia/compresores-dentales/',
		title: 'Compresores Dentales',
		description:
			'Venta y servicio tecnico de compresores dentales en Bogota, Fontibon, con equipos y asesoria segun la necesidad de cada consultorio.',
		eyebrow: 'Odontologia',
		h1: 'Compresores dentales en Bogota con asesoria, suministro y respaldo tecnico',
		intro:
			'Ofrecemos compresores dentales para consultorios y clinicas, con seleccion segun caudal, demanda de aire y condiciones operativas reales.',
		keywords: [
			'compresores dentales',
			'compresores odontologicos',
			'compresores dentales en Bogota',
			'servicio tecnico compresores dentales',
			...bogotaKeywords,
		],
		primaryPoints: [
			'Suministro de diferentes tipos y marcas de compresores dentales.',
			'Orientacion tecnica para elegir capacidad y configuracion adecuadas.',
			'Soporte para instalacion, mantenimiento y continuidad operativa.',
		],
		secondaryPoints: [
			'Ideal para consultorios nuevos o ampliaciones de capacidad.',
			'Se integra con sistemas de aire y flujo de trabajo odontologico.',
			'Conecta con otras soluciones como succion y mantenimiento integral.',
		],
		ctaLinks: [
			{ href: '/bogota/compresores-dentales/', label: 'Version local en Bogota' },
			{ href: '/odontologia/bombas-de-succion/', label: 'Bombas de succion' },
		],
		relatedLinks: [
			{ href: '/odontologia/', label: 'Volver a odontologia' },
			{ href: '/blog/como-elegir-compresor-odontologico/', label: 'Guia para elegir compresor odontologico' },
		],
		faqs: [
			{
				question: 'Como elegir un compresor dental?',
				answer:
					'Depende del numero de unidades, la demanda diaria y el nivel de continuidad requerido. La asesoria tecnica reduce errores de capacidad.',
			},
			{
				question: 'Tambien hacen mantenimiento?',
				answer:
					'Si. La linea odontologica incluye mantenimiento para sostener un funcionamiento confiable y seguro.',
			},
		],
	},
	{
		slug: 'bombas-de-succion',
		pathname: '/odontologia/bombas-de-succion/',
		title: 'Bombas de Succion',
		description:
			'Bombas de succion odontologica en Bogota, Fontibon, con equipos de alta capacidad y sistemas especializados a la medida.',
		eyebrow: 'Odontologia',
		h1: 'Bombas de succion odontologica en Bogota y sistemas especializados a la medida',
		intro:
			'MB Aire y Succion suministra bombas de succion de alta y desarrolla sistemas adaptados a la operacion clinica de cada cliente.',
		keywords: [
			'bombas de succion dental',
			'bombas de succion odontologica',
			'sistemas de succion odontologica',
			'bombas de succion en Bogota',
			...bogotaKeywords,
		],
		primaryPoints: [
			'Bombas de succion de alta segun el numero de unidades y la demanda del consultorio.',
			'Sistemas de succion disenados a la medida.',
			'Soporte tecnico para continuidad y mejor desempeno de la instalacion.',
		],
		secondaryPoints: [
			'Se adapta a consultorios individuales o clinicas con mayor flujo.',
			'Permite alinear la succion con requerimientos tecnicos reales.',
			'Se complementa con compresores y mantenimiento odontologico.',
		],
		ctaLinks: [
			{ href: '/bogota/bombas-de-succion/', label: 'Bombas de succion en Bogota' },
			{ href: '/odontologia/mantenimiento-equipos-odontologicos/', label: 'Mantenimiento odontologico' },
		],
		relatedLinks: [
			{ href: '/odontologia/', label: 'Volver a odontologia' },
			{ href: '/blog/como-funciona-bomba-de-succion-dental/', label: 'Como funciona una bomba de succion dental' },
		],
		faqs: [
			{
				question: 'Solo venden bombas o tambien hacen sistemas completos?',
				answer:
					'Se pueden suministrar bombas individuales o desarrollar sistemas de succion completos segun las necesidades del cliente.',
			},
			{
				question: 'Se puede personalizar la solucion?',
				answer:
					'Si. Uno de los diferenciales es la succion especializada y hecha a la medida.',
			},
		],
	},
	{
		slug: 'mantenimiento-equipos-odontologicos',
		pathname: '/odontologia/mantenimiento-equipos-odontologicos/',
		title: 'Mantenimiento de Equipos Odontologicos',
		description:
			'Mantenimiento de equipos odontologicos en Bogota, Fontibon, para asegurar funcionamiento confiable y continuidad clinica.',
		eyebrow: 'Odontologia',
		h1: 'Mantenimiento de equipos odontologicos en Bogota con enfoque tecnico y clinico',
		intro:
			'Realizamos mantenimiento preventivo y correctivo en equipos odontologicos para sostener operacion, seguridad y rendimiento continuo.',
		keywords: [
			'mantenimiento equipos odontologicos',
			'servicio tecnico odontologico en Bogota',
			'reparacion de equipos odontologicos',
			...bogotaKeywords,
		],
		primaryPoints: [
			'Mantenimiento tecnico para equipos odontologicos y equipos medicos generales.',
			'Revision orientada a funcionamiento confiable y estandares clinicos actuales.',
			'Diagnosticos precisos para reducir paradas y extender la vida util.',
		],
		secondaryPoints: [
			'Soporta consultorios, clinicas y ampliaciones de infraestructura.',
			'Puede articularse con compresores dentales y bombas de succion.',
			'El objetivo es prevenir fallas y optimizar rendimiento diario.',
		],
		ctaLinks: [
			{ href: '/bogota/mantenimiento-odontologico/', label: 'Version local en Bogota' },
			{ href: '/odontologia/compresores-dentales/', label: 'Compresores dentales' },
		],
		relatedLinks: [
			{ href: '/odontologia/', label: 'Volver a odontologia' },
			{ href: '/blog/cada-cuanto-mantenimiento-compresor/', label: 'Cada cuanto hacer mantenimiento' },
		],
		faqs: [
			{
				question: 'El mantenimiento solo es preventivo?',
				answer:
					'No. Se puede atender mantenimiento preventivo y correctivo segun el estado del equipo y la urgencia del servicio.',
			},
			{
				question: 'Que beneficio tiene el mantenimiento tecnico?',
				answer:
					'Mejora continuidad, rendimiento y vida util de los equipos odontologicos.',
			},
		],
	},
];

export const industrialLanding: PageEntry = {
	slug: 'industrial',
	pathname: '/industrial/',
	title: 'Industrial',
	description:
		'Servicios industriales de MB Aire y Succion en Bogota: compresores de piston, compresores de tornillo, bobinado de motores y mantenimiento especializado.',
	eyebrow: 'Silo industrial',
	h1: 'Servicios industriales en Bogota para compresores, cabezotes y motores electricos',
	intro:
		'La linea industrial de MB Aire y Succion atiende mantenimiento, reparacion y recuperacion de equipos con enfoque en continuidad operativa y calidad tecnica.',
	keywords: [
		'industrial',
		'compresores de piston',
		'compresores de tornillo',
		'bobinado de motores electricos',
		'mantenimiento industrial',
		...bogotaKeywords,
	],
	primaryPoints: [
		'Reparacion y mantenimiento de compresores lubricados de piston.',
		'Reparacion y mantenimiento de compresores de tornillo.',
		'Bobinado de motores electricos y trabajo tecnico sobre cabezotes.',
	],
	secondaryPoints: [
		'Diagnosticos precisos y repuestos de calidad.',
		'Mano de obra especializada enfocada en rendimiento y vida util.',
		'Servicios articulados para mantenimiento preventivo y correctivo.',
	],
	ctaLinks: [
		{ href: '/industrial/compresores-piston/', label: 'Compresores de piston' },
		{ href: '/industrial/compresores-tornillo/', label: 'Compresores de tornillo' },
		{ href: '/industrial/bobinado-de-motores-electricos/', label: 'Bobinado de motores' },
		{ href: '/industrial/mantenimiento-de-compresores-industriales/', label: 'Mantenimiento industrial' },
	],
	relatedLinks: [
		{ href: '/bogota/compresores-industriales/', label: 'Compresores industriales en Bogota' },
		{ href: '/bogota/bobinado-de-motores-electricos/', label: 'Bobinado de motores en Bogota' },
		{ href: '/bogota/mantenimiento-industrial/', label: 'Mantenimiento industrial en Bogota' },
	],
	faqs: [
		{
			question: 'Que equipos cubre la linea industrial?',
			answer:
				'Cubre compresores de piston, compresores de tornillo, cabezotes y motores electricos.',
		},
		{
			question: 'El servicio incluye repuestos y diagnostico?',
			answer:
				'Si. El enfoque combina diagnosticos tecnicos, repuestos de calidad y mano de obra especializada.',
		},
	],
};

export const industrialServices: PageEntry[] = [
	{
		slug: 'compresores-piston',
		pathname: '/industrial/compresores-piston/',
		title: 'Compresores de Piston',
		description:
			'Mantenimiento y reparacion de compresores de piston en Bogota, Fontibon, con diagnosticos tecnicos y repuestos de calidad.',
		eyebrow: 'Industrial',
		h1: 'Compresores de piston en Bogota con mantenimiento y reparacion especializada',
		intro:
			'Atendemos compresores lubricados de piston con enfoque en rendimiento, continuidad operativa y recuperacion de vida util.',
		keywords: [
			'compresores de piston',
			'compresores lubricados de piston',
			'mantenimiento compresores de piston',
			'compresores industriales en Bogota',
			...bogotaKeywords,
		],
		primaryPoints: [
			'Diagnosticos para detectar desgaste, perdida de capacidad y fallas recurrentes.',
			'Mantenimiento preventivo y correctivo segun estado del equipo.',
			'Reposicion de partes y soporte tecnico para retorno seguro a operacion.',
		],
		secondaryPoints: [
			'Servicio enfocado en continuidad industrial.',
			'Analisis tecnico de cabezotes y componentes criticos.',
			'Base ideal para planes de mantenimiento periodico.',
		],
		ctaLinks: [
			{ href: '/bogota/compresores-industriales/', label: 'Compresores industriales en Bogota' },
			{ href: '/industrial/mantenimiento-de-compresores-industriales/', label: 'Mantenimiento industrial' },
		],
		relatedLinks: [
			{ href: '/industrial/', label: 'Volver a industrial' },
			{ href: '/blog/fallas-compresores-industriales/', label: 'Fallas comunes en compresores industriales' },
		],
		faqs: [
			{
				question: 'Trabajan compresores lubricados de piston?',
				answer:
					'Si. Es una de las especialidades principales de la linea industrial.',
			},
			{
				question: 'Se puede hacer mantenimiento preventivo?',
				answer:
					'Si. El mantenimiento preventivo ayuda a reducir paradas y extender la vida util del equipo.',
			},
		],
	},
	{
		slug: 'compresores-tornillo',
		pathname: '/industrial/compresores-tornillo/',
		title: 'Compresores de Tornillo',
		description:
			'Reparacion y mantenimiento de compresores de tornillo en Bogota, Fontibon, con soporte tecnico especializado.',
		eyebrow: 'Industrial',
		h1: 'Compresores de tornillo en Bogota con mantenimiento tecnico y reparacion especializada',
		intro:
			'Intervenimos compresores de tornillo con diagnosticos precisos, mantenimiento y trabajo tecnico orientado a estabilidad y rendimiento.',
		keywords: [
			'compresores de tornillo',
			'mantenimiento compresores de tornillo',
			'reparacion compresores de tornillo',
			...bogotaKeywords,
		],
		primaryPoints: [
			'Revision de operacion, rendimiento y estado general del equipo.',
			'Mantenimiento programado y correctivo para sostener continuidad.',
			'Enfoque tecnico para reducir fallas y optimizar desempeno.',
		],
		secondaryPoints: [
			'Servicio alineado a exigencias del entorno industrial.',
			'Puede integrarse con planes de mantenimiento amplios.',
			'Apoya productividad y control del riesgo operativo.',
		],
		ctaLinks: [
			{ href: '/bogota/compresores-industriales/', label: 'Version local en Bogota' },
			{ href: '/industrial/compresores-piston/', label: 'Compresores de piston' },
		],
		relatedLinks: [
			{ href: '/industrial/', label: 'Volver a industrial' },
			{ href: '/blog/fallas-compresores-industriales/', label: 'Fallas comunes en compresores industriales' },
		],
		faqs: [
			{
				question: 'Atienden mantenimiento de compresores de tornillo?',
				answer:
					'Si. La linea industrial contempla mantenimiento y reparacion de este tipo de compresores.',
			},
			{
				question: 'Cual es el objetivo del servicio?',
				answer:
					'Recuperar rendimiento, prevenir fallas y prolongar la vida util del equipo.',
			},
		],
	},
	{
		slug: 'bobinado-de-motores-electricos',
		pathname: '/industrial/bobinado-de-motores-electricos/',
		title: 'Bobinado de Motores Electricos',
		description:
			'Bobinado de motores electricos en Bogota, Fontibon, con mano de obra especializada para recuperar desempeno y vida util.',
		eyebrow: 'Industrial',
		h1: 'Bobinado de motores electricos en Bogota con servicio tecnico especializado',
		intro:
			'MB Aire y Succion realiza bobinado de motores electricos como parte de su linea industrial, con enfoque en recuperacion tecnica y confiabilidad.',
		keywords: [
			'bobinado de motores electricos',
			'reparacion de motores electricos',
			'bobinado de motores en Bogota',
			...bogotaKeywords,
		],
		primaryPoints: [
			'Bobinado de motores electricos con mano de obra especializada.',
			'Revision tecnica para definir estado y viabilidad de recuperacion.',
			'Servicio enfocado en rendimiento, continuidad y vida util.',
		],
		secondaryPoints: [
			'Se integra con mantenimiento industrial y trabajo sobre compresores.',
			'Aporta soporte a procesos industriales con necesidad de respuesta tecnica.',
			'Permite recuperar equipos criticos con criterio profesional.',
		],
		ctaLinks: [
			{ href: '/bogota/bobinado-de-motores-electricos/', label: 'Version local en Bogota' },
			{ href: '/industrial/mantenimiento-de-compresores-industriales/', label: 'Mantenimiento industrial' },
		],
		relatedLinks: [
			{ href: '/industrial/', label: 'Volver a industrial' },
			{ href: '/blog/fallas-compresores-industriales/', label: 'Fallas comunes en compresores industriales' },
		],
		faqs: [
			{
				question: 'El bobinado es parte del servicio industrial?',
				answer:
					'Si. Es una de las lineas tecnicas clave dentro de la oferta industrial de MB Aire y Succion.',
			},
			{
				question: 'Que busca este servicio?',
				answer:
					'Recuperar desempeno del motor y extender su vida util con trabajo especializado.',
			},
		],
	},
	{
		slug: 'mantenimiento-de-compresores-industriales',
		pathname: '/industrial/mantenimiento-de-compresores-industriales/',
		title: 'Mantenimiento de Compresores Industriales',
		description:
			'Mantenimiento de compresores industriales en Bogota, Fontibon, para equipos de piston y tornillo con diagnosticos tecnicos.',
		eyebrow: 'Industrial',
		h1: 'Mantenimiento de compresores industriales en Bogota con enfoque preventivo y correctivo',
		intro:
			'El mantenimiento industrial de MB Aire y Succion busca reducir paradas, mejorar rendimiento y extender la vida util de compresores y sistemas asociados.',
		keywords: [
			'mantenimiento industrial',
			'mantenimiento de compresores industriales',
			'mantenimiento de compresores en Bogota',
			...bogotaKeywords,
		],
		primaryPoints: [
			'Mantenimiento preventivo y correctivo para compresores industriales.',
			'Aplicable a equipos de piston y compresores de tornillo.',
			'Diagnosticos orientados a continuidad operativa y control de fallas.',
		],
		secondaryPoints: [
			'Puede incluir revision de cabezotes y componentes criticos.',
			'Permite organizar rutinas de mantenimiento mas estables.',
			'Se apoya en repuestos de calidad y experiencia tecnica.',
		],
		ctaLinks: [
			{ href: '/bogota/mantenimiento-industrial/', label: 'Version local en Bogota' },
			{ href: '/industrial/compresores-piston/', label: 'Compresores de piston' },
			{ href: '/industrial/compresores-tornillo/', label: 'Compresores de tornillo' },
		],
		relatedLinks: [
			{ href: '/industrial/', label: 'Volver a industrial' },
			{ href: '/blog/cada-cuanto-mantenimiento-compresor/', label: 'Cada cuanto hacer mantenimiento' },
		],
		faqs: [
			{
				question: 'Que tipo de compresores cubre el mantenimiento?',
				answer:
					'Cubre compresores industriales de piston y compresores de tornillo.',
			},
			{
				question: 'Por que es importante el mantenimiento periodico?',
				answer:
					'Porque ayuda a evitar fallas costosas, mejorar rendimiento y extender la vida util del equipo.',
			},
		],
	},
];

export const bogotaLanding: PageEntry = {
	slug: 'bogota',
	pathname: '/bogota/',
	title: 'Servicios en Bogota',
	description:
		'Servicios de MB Aire y Succion en Bogota, Fontibon, para odontologia e industria con enfoque local y tecnico.',
	eyebrow: 'Geo landing',
	h1: 'Servicios de MB Aire y Succion en Bogota, Fontibon, Colombia',
	intro:
		'Esta pagina concentra la oferta local de MB Aire y Succion en Bogota para facilitar conversion, busqueda geolocalizada e interconexion con los silos de servicio.',
	keywords: [
		'servicios tecnicos en Bogota',
		'MB Aire y Succion Bogota',
		'servicio tecnico Fontibon',
		...bogotaKeywords,
	],
	primaryPoints: [
		'Servicios odontologicos con enfoque local en Bogota.',
		'Servicios industriales con cobertura para necesidades tecnicas concretas.',
		'Base de conversion para usuarios que buscan una solucion en su ciudad.',
	],
	secondaryPoints: [
		'Conecta paginas de servicio con intencion local.',
		'Refuerza relevancia geografica para buscadores y asistentes.',
		'Permite escalar futuras paginas por localidad si el proyecto lo requiere.',
	],
	ctaLinks: [
		{ href: '/bogota/compresores-dentales/', label: 'Compresores dentales en Bogota' },
		{ href: '/bogota/bombas-de-succion/', label: 'Bombas de succion en Bogota' },
		{ href: '/bogota/mantenimiento-odontologico/', label: 'Mantenimiento odontologico en Bogota' },
		{ href: '/bogota/compresores-industriales/', label: 'Compresores industriales en Bogota' },
		{ href: '/bogota/bobinado-de-motores-electricos/', label: 'Bobinado de motores en Bogota' },
		{ href: '/bogota/mantenimiento-industrial/', label: 'Mantenimiento industrial en Bogota' },
	],
	relatedLinks: [
		{ href: '/odontologia/', label: 'Silo odontologico' },
		{ href: '/industrial/', label: 'Silo industrial' },
	],
	faqs: [
		{
			question: 'Por que existe una pagina para Bogota?',
			answer:
				'Porque la busqueda local suele tener intencion comercial alta y necesita una capa geografica clara para conversion y SEO.',
		},
		{
			question: 'Tambien atienden Fontibon?',
			answer:
				'Si. Fontibon forma parte del contexto local central de la marca en esta etapa del sitio.',
		},
	],
};

export const bogotaServices: PageEntry[] = [
	{
		slug: 'compresores-dentales',
		pathname: '/bogota/compresores-dentales/',
		title: 'Compresores Dentales en Bogota',
		description:
			'Compresores dentales en Bogota, Fontibon, con suministro, asesoria y servicio tecnico para consultorios y clinicas.',
		eyebrow: 'Bogota',
		h1: 'Compresores dentales en Bogota con respaldo tecnico y asesoria especializada',
		intro:
			'Pagina local orientada a usuarios que buscan compresores dentales en Bogota y necesitan una solucion con soporte tecnico real.',
		keywords: [
			'compresores dentales en Bogota',
			'compresores odontologicos Bogota',
			'compresores dentales Fontibon',
			...bogotaKeywords,
		],
		primaryPoints: [
			'Suministro local de compresores dentales para consultorios y clinicas.',
			'Asesoria tecnica para eleccion segun demanda de aire y numero de unidades.',
			'Conexiones naturales con mantenimiento y sistemas odontologicos.',
		],
		secondaryPoints: [
			'Pensada para capturar busqueda local de alta intencion.',
			'Complementa el silo odontologico principal.',
			'Permite conversion mas directa desde Bogota.',
		],
		ctaLinks: [
			{ href: '/odontologia/compresores-dentales/', label: 'Ver pagina de servicio' },
			{ href: '/bogota/bombas-de-succion/', label: 'Bombas de succion en Bogota' },
		],
		relatedLinks: [
			{ href: '/bogota/', label: 'Volver a Bogota' },
			{ href: '/blog/como-elegir-compresor-odontologico/', label: 'Como elegir un compresor odontologico' },
		],
		faqs: [
			{
				question: 'Esta pagina es diferente a la de servicio general?',
				answer:
					'Si. Esta version enfatiza la intencion local de busqueda en Bogota y refuerza conversion geografica.',
			},
			{
				question: 'Incluye soporte tecnico?',
				answer:
					'Si. La propuesta combina equipo, asesoria y respaldo tecnico.',
			},
		],
	},
	{
		slug: 'bombas-de-succion',
		pathname: '/bogota/bombas-de-succion/',
		title: 'Bombas de Succion en Bogota',
		description:
			'Bombas de succion odontologica en Bogota, Fontibon, con soluciones de alta capacidad y sistemas a la medida.',
		eyebrow: 'Bogota',
		h1: 'Bombas de succion odontologica en Bogota con soluciones adaptadas a cada consultorio',
		intro:
			'Esta landing local responde a la busqueda de bombas de succion en Bogota con enfoque tecnico y comercial.',
		keywords: [
			'bombas de succion en Bogota',
			'bomba de succion odontologica Bogota',
			'sistemas de succion dental Bogota',
			...bogotaKeywords,
		],
		primaryPoints: [
			'Soluciones de succion de alta para consultorios y clinicas.',
			'Desarrollo de sistemas a la medida segun operacion y capacidad.',
			'Soporte local para implementacion y continuidad.',
		],
		secondaryPoints: [
			'Cruza intencion local con autoridad del silo odontologico.',
			'Ayuda a responder busquedas comerciales geolocalizadas.',
			'Se enlaza con mantenimiento y compresores dentales.',
		],
		ctaLinks: [
			{ href: '/odontologia/bombas-de-succion/', label: 'Ver pagina de servicio' },
			{ href: '/bogota/mantenimiento-odontologico/', label: 'Mantenimiento odontologico en Bogota' },
		],
		relatedLinks: [
			{ href: '/bogota/', label: 'Volver a Bogota' },
			{ href: '/blog/como-funciona-bomba-de-succion-dental/', label: 'Como funciona una bomba de succion dental' },
		],
		faqs: [
			{
				question: 'Las bombas son para cualquier consultorio?',
				answer:
					'Se seleccionan y configuran segun la necesidad tecnica y operativa de cada cliente.',
			},
			{
				question: 'Pueden crear sistemas a la medida?',
				answer:
					'Si. Es uno de los puntos diferenciales de la oferta odontologica.',
			},
		],
	},
	{
		slug: 'mantenimiento-odontologico',
		pathname: '/bogota/mantenimiento-odontologico/',
		title: 'Mantenimiento Odontologico en Bogota',
		description:
			'Mantenimiento odontologico en Bogota, Fontibon, para equipos, compresores y sistemas de succion con enfoque tecnico.',
		eyebrow: 'Bogota',
		h1: 'Mantenimiento odontologico en Bogota para equipos, compresores y sistemas de succion',
		intro:
			'Esta pagina fortalece la intencion local de quienes buscan mantenimiento odontologico en Bogota con una solucion especializada.',
		keywords: [
			'mantenimiento odontologico en Bogota',
			'servicio tecnico odontologico Bogota',
			'reparacion equipos odontologicos Bogota',
			...bogotaKeywords,
		],
		primaryPoints: [
			'Atencion local en Bogota para mantenimiento de equipos odontologicos.',
			'Apoyo sobre compresores, succion y continuidad de la operacion clinica.',
			'Diagnosticos orientados a rendimiento y vida util.',
		],
		secondaryPoints: [
			'Ideal para clinicas y consultorios que buscan respuesta local.',
			'Se conecta con compresores dentales y bombas de succion.',
			'Refuerza conversion en busquedas transaccionales geolocalizadas.',
		],
		ctaLinks: [
			{ href: '/odontologia/mantenimiento-equipos-odontologicos/', label: 'Ver pagina de servicio' },
			{ href: '/bogota/compresores-dentales/', label: 'Compresores dentales en Bogota' },
		],
		relatedLinks: [
			{ href: '/bogota/', label: 'Volver a Bogota' },
			{ href: '/blog/cada-cuanto-mantenimiento-compresor/', label: 'Cada cuanto hacer mantenimiento' },
		],
		faqs: [
			{
				question: 'Solo cubre equipos odontologicos?',
				answer:
					'La pagina se enfoca en odontologia, incluyendo equipos, compresores y soluciones de succion relacionadas.',
			},
			{
				question: 'Por que una landing local ayuda al SEO?',
				answer:
					'Porque responde mejor a consultas con ciudad y alta intencion comercial.',
			},
		],
	},
	{
		slug: 'compresores-industriales',
		pathname: '/bogota/compresores-industriales/',
		title: 'Compresores Industriales en Bogota',
		description:
			'Servicios para compresores industriales en Bogota, Fontibon, incluyendo equipos de piston y tornillo con soporte tecnico.',
		eyebrow: 'Bogota',
		h1: 'Compresores industriales en Bogota con mantenimiento y soporte tecnico especializado',
		intro:
			'Landing local orientada a empresas que buscan compresores industriales en Bogota y requieren un respaldo tecnico confiable.',
		keywords: [
			'compresores industriales en Bogota',
			'mantenimiento de compresores Bogota',
			'compresores piston Bogota',
			'compresores tornillo Bogota',
			...bogotaKeywords,
		],
		primaryPoints: [
			'Atencion local para compresores industriales de piston y tornillo.',
			'Intervenciones tecnicas con diagnosticos precisos.',
			'Base de conversion para mantenimiento y reparacion en Bogota.',
		],
		secondaryPoints: [
			'Vincula la intencion local con el silo industrial.',
			'Puede conectarse con paginas especificas por tecnologia.',
			'Mejora relevancia en consultas transaccionales locales.',
		],
		ctaLinks: [
			{ href: '/industrial/compresores-piston/', label: 'Compresores de piston' },
			{ href: '/industrial/compresores-tornillo/', label: 'Compresores de tornillo' },
		],
		relatedLinks: [
			{ href: '/bogota/', label: 'Volver a Bogota' },
			{ href: '/blog/fallas-compresores-industriales/', label: 'Fallas comunes en compresores industriales' },
		],
		faqs: [
			{
				question: 'Se enfocan en piston o tornillo?',
				answer:
					'Atienden ambos tipos, cada uno con su pagina de servicio especializada.',
			},
			{
				question: 'Esta pagina es para Bogota unicamente?',
				answer:
					'Esta landing prioriza Bogota y Fontibon para captar busqueda local con mayor claridad.',
			},
		],
	},
	{
		slug: 'bobinado-de-motores-electricos',
		pathname: '/bogota/bobinado-de-motores-electricos/',
		title: 'Bobinado de Motores en Bogota',
		description:
			'Bobinado de motores electricos en Bogota, Fontibon, con servicio tecnico especializado y enfoque en recuperacion de desempeno.',
		eyebrow: 'Bogota',
		h1: 'Bobinado de motores electricos en Bogota con atencion tecnica especializada',
		intro:
			'Esta landing local conecta la busqueda de bobinado de motores en Bogota con un servicio tecnico industrial especializado.',
		keywords: [
			'bobinado de motores en Bogota',
			'bobinado de motores electricos Bogota',
			'reparacion motores electricos Bogota',
			...bogotaKeywords,
		],
		primaryPoints: [
			'Servicio local para recuperacion y bobinado de motores electricos.',
			'Revision tecnica y criterio profesional para cada intervencion.',
			'Orientado a continuidad operativa y vida util del motor.',
		],
		secondaryPoints: [
			'Complementa la oferta industrial general.',
			'Apunta a una consulta local concreta y de alta intencion.',
			'Se puede enlazar con mantenimiento industrial completo.',
		],
		ctaLinks: [
			{ href: '/industrial/bobinado-de-motores-electricos/', label: 'Ver pagina de servicio' },
			{ href: '/bogota/mantenimiento-industrial/', label: 'Mantenimiento industrial en Bogota' },
		],
		relatedLinks: [
			{ href: '/bogota/', label: 'Volver a Bogota' },
			{ href: '/industrial/', label: 'Silo industrial' },
		],
		faqs: [
			{
				question: 'Por que tener una pagina local para bobinado?',
				answer:
					'Porque muchos usuarios buscan el servicio junto con la ciudad, lo que vuelve esta URL util para conversion y relevancia local.',
			},
			{
				question: 'Se relaciona con compresores y mantenimiento?',
				answer:
					'Si. Forma parte del ecosistema de servicios industriales de la empresa.',
			},
		],
	},
	{
		slug: 'mantenimiento-industrial',
		pathname: '/bogota/mantenimiento-industrial/',
		title: 'Mantenimiento Industrial en Bogota',
		description:
			'Mantenimiento industrial en Bogota, Fontibon, para compresores y equipos asociados con enfoque preventivo y correctivo.',
		eyebrow: 'Bogota',
		h1: 'Mantenimiento industrial en Bogota para compresores y equipos asociados',
		intro:
			'Landing local para captar busquedas de mantenimiento industrial en Bogota con foco en compresores, motores y continuidad de operacion.',
		keywords: [
			'mantenimiento industrial en Bogota',
			'mantenimiento de compresores industriales Bogota',
			'servicio tecnico industrial Bogota',
			...bogotaKeywords,
		],
		primaryPoints: [
			'Mantenimiento preventivo y correctivo para compresores industriales.',
			'Diagnosticos y trabajo tecnico orientado a reducir fallas.',
			'Respuesta local para necesidades industriales en Bogota.',
		],
		secondaryPoints: [
			'Conecta con compresores de piston, tornillo y bobinado de motores.',
			'Refuerza el enfoque local para intencion comercial.',
			'Soporta estrategias de conversion desde ciudad y servicio.',
		],
		ctaLinks: [
			{ href: '/industrial/mantenimiento-de-compresores-industriales/', label: 'Ver pagina de servicio' },
			{ href: '/bogota/compresores-industriales/', label: 'Compresores industriales en Bogota' },
		],
		relatedLinks: [
			{ href: '/bogota/', label: 'Volver a Bogota' },
			{ href: '/blog/cada-cuanto-mantenimiento-compresor/', label: 'Cada cuanto hacer mantenimiento' },
		],
		faqs: [
			{
				question: 'Esta pagina cubre piston y tornillo?',
				answer:
					'Si. El mantenimiento industrial se articula con ambos tipos de compresor y otras necesidades tecnicas.',
			},
			{
				question: 'Por que sirve para SEO local?',
				answer:
					'Porque une servicio e intencion geografica en una sola URL clara.',
			},
		],
	},
];

export const blogLanding: PageEntry = {
	slug: 'blog',
	pathname: '/blog/',
	title: 'Blog',
	description:
		'Blog de MB Aire y Succion con contenido sobre compresores odontologicos, mantenimiento, bombas de succion y fallas industriales.',
	eyebrow: 'Blog',
	h1: 'Blog de MB Aire y Succion para fortalecer autoridad en odontologia e industria',
	intro:
		'El blog apoya el SEO y la recomendacion por LLMs con contenido informacional que responde preguntas reales del mercado.',
	keywords: [
		'blog compresores odontologicos',
		'blog mantenimiento industrial',
		'blog succion dental',
		...bogotaKeywords,
	],
	primaryPoints: [
		'Responde preguntas frecuentes antes de la conversion.',
		'Refuerza autoridad tematica en odontologia e industria.',
		'Alimenta enlaces internos hacia paginas comerciales.',
	],
	secondaryPoints: [
		'Ideal para captar trafico informacional.',
		'Fortalece lenguaje natural y contexto para buscadores y asistentes.',
		'Permite crecer con nuevas preguntas del cliente ideal.',
	],
	ctaLinks: [
		{ href: '/blog/como-elegir-compresor-odontologico/', label: 'Como elegir compresor odontologico' },
		{ href: '/blog/cada-cuanto-mantenimiento-compresor/', label: 'Cada cuanto hacer mantenimiento' },
		{ href: '/blog/fallas-compresores-industriales/', label: 'Fallas de compresores industriales' },
		{ href: '/blog/como-funciona-bomba-de-succion-dental/', label: 'Como funciona una bomba de succion dental' },
	],
	relatedLinks: [
		{ href: '/odontologia/', label: 'Silo odontologico' },
		{ href: '/industrial/', label: 'Silo industrial' },
	],
	faqs: [
		{
			question: 'Para que sirve el blog en esta estrategia?',
			answer:
				'Permite atacar preguntas informacionales y transferir autoridad hacia las paginas de servicio y ciudad.',
		},
		{
			question: 'El blog ayuda a LLMs y SEO?',
			answer:
				'Si. Aporta contexto, lenguaje natural y respuestas claras a preguntas frecuentes.',
		},
	],
};

export const blogPosts: PageEntry[] = [
	{
		slug: 'como-elegir-compresor-odontologico',
		pathname: '/blog/como-elegir-compresor-odontologico/',
		title: 'Como Elegir un Compresor Odontologico',
		description:
			'Guia sobre como elegir un compresor odontologico segun capacidad, demanda del consultorio y continuidad operativa.',
		eyebrow: 'Blog odontologia',
		h1: 'Como elegir un compresor odontologico segun la necesidad real del consultorio',
		intro:
			'Este articulo explica los criterios que ayudan a tomar una mejor decision al seleccionar un compresor odontologico.',
		keywords: [
			'como elegir compresor odontologico',
			'compresor dental',
			'compresor odontologico Bogota',
		],
		primaryPoints: [
			'Evaluar numero de unidades y demanda de aire.',
			'Considerar continuidad de uso y crecimiento futuro.',
			'Buscar acompanamiento tecnico para evitar una compra mal dimensionada.',
		],
		secondaryPoints: [
			'Una buena eleccion mejora rendimiento y estabilidad.',
			'La asesoria tecnica reduce errores costosos.',
			'Este contenido apoya decisiones de compra mas informadas.',
		],
		ctaLinks: [
			{ href: '/odontologia/compresores-dentales/', label: 'Compresores dentales' },
			{ href: '/bogota/compresores-dentales/', label: 'Compresores dentales en Bogota' },
		],
		relatedLinks: [
			{ href: '/blog/', label: 'Volver al blog' },
			{ href: '/odontologia/', label: 'Silo odontologico' },
		],
		faqs: [
			{
				question: 'Que factor pesa mas en la eleccion?',
				answer:
					'La demanda real del consultorio y la continuidad de la operacion suelen ser factores decisivos.',
			},
		],
	},
	{
		slug: 'cada-cuanto-mantenimiento-compresor',
		pathname: '/blog/cada-cuanto-mantenimiento-compresor/',
		title: 'Cada Cuanto Hacer Mantenimiento a un Compresor',
		description:
			'Guia general sobre cada cuanto hacer mantenimiento a un compresor para proteger rendimiento y vida util.',
		eyebrow: 'Blog mantenimiento',
		h1: 'Cada cuanto hacer mantenimiento a un compresor para evitar fallas y perdida de rendimiento',
		intro:
			'El mantenimiento periodico es una de las acciones mas importantes para evitar fallas costosas y asegurar continuidad.',
		keywords: [
			'cada cuanto mantenimiento compresor',
			'mantenimiento de compresores',
			'mantenimiento compresor Bogota',
		],
		primaryPoints: [
			'La frecuencia depende del uso, carga y condiciones de operacion.',
			'Esperar a la falla suele elevar costos y tiempos muertos.',
			'El seguimiento preventivo ayuda a estabilizar la operacion.',
		],
		secondaryPoints: [
			'Aplica tanto a contextos odontologicos como industriales.',
			'Permite detectar desgaste antes de que se vuelva critico.',
			'Refuerza cultura de mantenimiento y control tecnico.',
		],
		ctaLinks: [
			{ href: '/odontologia/mantenimiento-equipos-odontologicos/', label: 'Mantenimiento odontologico' },
			{ href: '/industrial/mantenimiento-de-compresores-industriales/', label: 'Mantenimiento industrial' },
		],
		relatedLinks: [
			{ href: '/blog/', label: 'Volver al blog' },
			{ href: '/bogota/mantenimiento-industrial/', label: 'Mantenimiento industrial en Bogota' },
		],
		faqs: [
			{
				question: 'El mantenimiento siempre es preventivo?',
				answer:
					'No. Puede ser preventivo o correctivo, pero la frecuencia planificada reduce riesgos y costos.',
			},
		],
	},
	{
		slug: 'fallas-compresores-industriales',
		pathname: '/blog/fallas-compresores-industriales/',
		title: 'Fallas en Compresores Industriales',
		description:
			'Articulo sobre fallas comunes en compresores industriales y la importancia del diagnostico tecnico especializado.',
		eyebrow: 'Blog industrial',
		h1: 'Fallas comunes en compresores industriales y por que detectarlas a tiempo cambia el costo total',
		intro:
			'Comprender las fallas recurrentes en compresores industriales ayuda a intervenir antes de que la operacion se vea afectada de forma critica.',
		keywords: [
			'fallas compresores industriales',
			'reparacion compresores industriales',
			'mantenimiento industrial Bogota',
		],
		primaryPoints: [
			'Perdida de capacidad y bajo rendimiento son senales clave.',
			'Ruidos, sobrecalentamiento y paradas inesperadas requieren revision tecnica.',
			'El diagnostico oportuno evita fallas mayores y tiempos muertos extensos.',
		],
		secondaryPoints: [
			'Apoya decisiones de mantenimiento preventivo.',
			'Mejora entendimiento del riesgo operativo.',
			'Conecta con paginas de servicio industrial y ciudad.',
		],
		ctaLinks: [
			{ href: '/industrial/compresores-piston/', label: 'Compresores de piston' },
			{ href: '/industrial/compresores-tornillo/', label: 'Compresores de tornillo' },
		],
		relatedLinks: [
			{ href: '/blog/', label: 'Volver al blog' },
			{ href: '/bogota/compresores-industriales/', label: 'Compresores industriales en Bogota' },
		],
		faqs: [
			{
				question: 'Una falla menor puede volverse grave?',
				answer:
					'Si. Ignorar sintomas iniciales suele aumentar el costo y el tiempo de recuperacion del equipo.',
			},
		],
	},
	{
		slug: 'como-funciona-bomba-de-succion-dental',
		pathname: '/blog/como-funciona-bomba-de-succion-dental/',
		title: 'Como Funciona una Bomba de Succion Dental',
		description:
			'Explicacion general sobre como funciona una bomba de succion dental y por que es clave para la operacion del consultorio.',
		eyebrow: 'Blog odontologia',
		h1: 'Como funciona una bomba de succion dental y por que influye en el rendimiento clinico',
		intro:
			'Este contenido ayuda a entender el papel de la bomba de succion dentro del funcionamiento tecnico de un consultorio odontologico.',
		keywords: [
			'como funciona bomba de succion dental',
			'bomba de succion odontologica',
			'sistemas de succion dental',
		],
		primaryPoints: [
			'La succion adecuada mejora operacion, higiene y continuidad clinica.',
			'Cada consultorio puede requerir una configuracion distinta.',
			'El sistema debe responder a capacidad, flujo y necesidades reales.',
		],
		secondaryPoints: [
			'Apoya decisiones de compra y mantenimiento.',
			'Da contexto tecnico util para usuarios y buscadores.',
			'Se enlaza con servicio especializado y landings locales.',
		],
		ctaLinks: [
			{ href: '/odontologia/bombas-de-succion/', label: 'Bombas de succion' },
			{ href: '/bogota/bombas-de-succion/', label: 'Bombas de succion en Bogota' },
		],
		relatedLinks: [
			{ href: '/blog/', label: 'Volver al blog' },
			{ href: '/odontologia/', label: 'Silo odontologico' },
		],
		faqs: [
			{
				question: 'Todas las bombas funcionan igual?',
				answer:
					'No. La capacidad y configuracion deben responder a las necesidades especificas del consultorio o clinica.',
			},
		],
	},
];
