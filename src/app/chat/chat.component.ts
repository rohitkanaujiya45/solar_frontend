import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})

export class ChatComponent {
  query: string = '';
  responseMessage: string = ''; 
  isDarkMode: boolean = false;
  isLoading: boolean = false;
  http = inject(HttpClient);

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }
  search() {
    if (!this.query.trim()) return;
  
    this.isLoading = true;
  
    this.http.post<{ response: string }>('https://solar-backend-eta.vercel.app/ask', { message: this.query }).subscribe(
      (response) => {
        this.responseMessage = `<strong>Q:</strong> ${this.query}<br><br><strong>A:</strong> ${this.formatResponse(response.response)}`;
        this.isLoading = false;
        this.query = '';
      },
      (error) => {
        this.responseMessage = '<strong>Error:</strong> Unable to get response from AI';
        console.error('Error communicating with backend:', error);
        this.isLoading = false;
      }
    );
  }

  formatResponse(response: string): string {
    return response.replace(/\n/g, '<br>');
  }
}
