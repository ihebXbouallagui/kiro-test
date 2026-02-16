import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

interface JobOffer {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  postedDate: Date;
  deadline: Date;
  status: 'active' | 'closed' | 'pending';
  applicants: number;
}

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(items: JobOffer[], status: string): JobOffer[] {
    if (!items || !status) {
      return items;
    }
    return items.filter(item => item.status === status);
  }
}

@Component({
  selector: 'app-job-offers',
  standalone: true,
  imports: [CommonModule, FilterPipe],
  templateUrl: './job-offers.component.html',
  styleUrl: './job-offers.component.scss'
})
export class JobOffersComponent {
  jobOffers: JobOffer[] = [
    {
      id: 1,
      title: 'Développeur Full Stack',
      company: 'Tech Solutions',
      location: 'Tunis, Tunisie',
      type: 'CDI',
      salary: '2500 - 3500 TND',
      description: 'Nous recherchons un développeur Full Stack expérimenté pour rejoindre notre équipe dynamique.',
      requirements: ['Angular', 'Node.js', 'MongoDB', '3+ ans d\'expérience'],
      postedDate: new Date('2024-02-01'),
      deadline: new Date('2024-03-15'),
      status: 'active',
      applicants: 15
    },
    {
      id: 2,
      title: 'Designer UI/UX',
      company: 'Creative Agency',
      location: 'Sfax, Tunisie',
      type: 'CDD',
      salary: '2000 - 2800 TND',
      description: 'Créez des expériences utilisateur exceptionnelles pour nos clients internationaux.',
      requirements: ['Figma', 'Adobe XD', 'Portfolio requis', '2+ ans d\'expérience'],
      postedDate: new Date('2024-02-05'),
      deadline: new Date('2024-03-20'),
      status: 'active',
      applicants: 23
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'AI Innovations',
      location: 'Remote',
      type: 'Freelance',
      salary: '3000 - 4500 TND',
      description: 'Analysez et exploitez les données pour créer des solutions d\'intelligence artificielle.',
      requirements: ['Python', 'Machine Learning', 'TensorFlow', 'Master en Data Science'],
      postedDate: new Date('2024-01-28'),
      deadline: new Date('2024-03-10'),
      status: 'active',
      applicants: 8
    },
    {
      id: 4,
      title: 'Chef de Projet IT',
      company: 'Digital Consulting',
      location: 'Sousse, Tunisie',
      type: 'CDI',
      salary: '3500 - 5000 TND',
      description: 'Gérez des projets IT complexes et coordonnez des équipes multidisciplinaires.',
      requirements: ['Gestion de projet', 'Agile/Scrum', 'Leadership', '5+ ans d\'expérience'],
      postedDate: new Date('2024-02-10'),
      deadline: new Date('2024-03-25'),
      status: 'active',
      applicants: 12
    },
    {
      id: 5,
      title: 'Développeur Mobile',
      company: 'Mobile Apps Co',
      location: 'Tunis, Tunisie',
      type: 'CDI',
      salary: '2200 - 3200 TND',
      description: 'Développez des applications mobiles innovantes pour iOS et Android.',
      requirements: ['React Native', 'Flutter', 'API REST', '2+ ans d\'expérience'],
      postedDate: new Date('2024-01-25'),
      deadline: new Date('2024-03-05'),
      status: 'closed',
      applicants: 31
    },
    {
      id: 6,
      title: 'Ingénieur DevOps',
      company: 'Cloud Systems',
      location: 'Remote',
      type: 'CDI',
      salary: '3200 - 4200 TND',
      description: 'Automatisez et optimisez nos infrastructures cloud et pipelines CI/CD.',
      requirements: ['Docker', 'Kubernetes', 'AWS/Azure', 'Jenkins', '3+ ans d\'expérience'],
      postedDate: new Date('2024-02-12'),
      deadline: new Date('2024-03-30'),
      status: 'active',
      applicants: 7
    }
  ];

  getStatusClass(status: string): string {
    switch(status) {
      case 'active': return 'status-active';
      case 'closed': return 'status-closed';
      case 'pending': return 'status-pending';
      default: return '';
    }
  }

  getStatusText(status: string): string {
    switch(status) {
      case 'active': return 'Actif';
      case 'closed': return 'Fermé';
      case 'pending': return 'En attente';
      default: return status;
    }
  }

  getTotalApplicants(): number {
    return this.jobOffers.reduce((sum, job) => sum + job.applicants, 0);
  }
}
