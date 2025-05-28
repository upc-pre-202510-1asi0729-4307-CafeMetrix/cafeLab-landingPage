import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

interface Plan {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
}

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./plans.component.css']
})
export class PlansComponent {
  plans: Plan[] = [
    {
      title: 'Plan Base Cafetal',
      price: 's/.19/mes',
      features: [
        '✓ Registro básico de tuestes (manual).',
        '✓ Biblioteca de recetas y módulos.',
        '✓ Registro de defectos comunes.',
        '✓ Guía de almacenamiento y control simple de inventario.',
        '✓ Acceso desde móvil.'
      ],
      buttonText: 'Conocer Plan Base Cafetal'
    },
    {
      title: 'Plan Técnico de Tueste',
      price: 's/.49/mes',
      features: [
        '✓ Todo Plan Base Cafetal.',
        '✓ Costos automatizados y comparativo por lote.',
        '✓ Registro digital de tuestes con curvas personalizadas.',
        '✓ Calculadora de pérdida de peso y rendimiento.',
        '✓ Biblioteca extendida de perfiles y curvas por origen.'
      ],
      buttonText: 'Conocer Plan Técnico de Tueste'
    },
    {
      title: 'Plan Artista del Tueste',
      price: 's/.59/mes',
      features: [
        '✓ Gestor de recetas personalizadas por método y bebida.',
        '✓ Calibrador de molinos y ratio.',
        '✓ Portafolio con notas por cliente, origen o evaluación.',
        '✓ Registro de extracciones y resultados.'
      ],
      buttonText: 'Conocer Plan Artista del Tueste'
    },
    {
      title: 'Plan D\' Especialidad',
      price: 's/.81/mes',
      features: [
        '✓ Control de inventario (verde y tostado).',
        '✓ Conectividad con sensores IoT (tostadoras).',
        '✓ Modelado y control sensorial.',
        '✓ Módulos de certificaciones y capacitaciones.'
      ],
      buttonText: 'Conocer Plan D\' Especialidad'
    }
  ];

  onPlanSelect(plan: Plan) {
    console.log('Plan selected:', plan.title);
    // Handle plan selection logic
  }
}
